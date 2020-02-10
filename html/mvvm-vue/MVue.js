class MVue {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;
    if (this.$el) {
      new Observer(this.$data);
      //实现一个数据观察者
      new Compile(this.$el, this);
      this.proxyData(this.$data);
    }
  }
  proxyData(data) {
    for (const key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key];
        },
        set(newVal) {
          data[key] = newVal;
        }
      })
    }
  }
}


const compileUtil = {
  getVal(expr, vm) {
    return expr.split('.').reduce((data, currentVal) => {
      return data[currentVal];
    }, vm.$data)
  },
  setVal(expr, vm, inputVal) {
    expr.split('.').reduce((data, currentVal, index, arr) => {
      if (index === arr.length - 1) {
        data[currentVal] = inputVal;
      }
      return data[currentVal];
    }, vm.$data)
  },
  getContentVal(expr, vm) {
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(args[1], vm)
    })
  },
  text(node, expr, vm) { // expr:msg  //v-text='person.name'
    let value;
    if (expr.indexOf('{{') !== -1) {
      //{{person.name}} == {{person.age}}
      value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
        new Watcher(vm, args[1], (newVal) => {
          this.updater.textUpdater(node, this.getContentVal(expr, vm));
        })
        return this.getVal(args[1], vm)
      })
    } else {
      value = this.getVal(expr, vm);
    }
    this.updater.textUpdater(node, value);
  },
  html(node, expr, vm) {
    const value = this.getVal(expr, vm);
    new Watcher(vm, expr, (newVal) => {
      this.updater.htmlUpdater(node, newVal);
    })
    this.updater.htmlUpdater(node, value);
  },
  model(node, expr, vm) {
    const value = this.getVal(expr, vm);
    //绑定更新函数 数据=》视图
    new Watcher(vm, expr, (newVal) => {
      this.updater.modelUpdater(node, newVal);
    })

    //视图=>数据=>视图
    node.addEventListener('input', (e) => {
      this.setVal(expr, vm, e.target.value);
    })
    this.updater.modelUpdater(node, value);
  },
  on(node, expr, vm, eventName) {
    let fn = vm.$options.methods && vm.$options.methods[expr]
    node.addEventListener(eventName, fn.bind(vm), false);
  },
  bind(node, expr, vm, attrName) {

  },
  //更新函数
  updater: {
    textUpdater(node, value) {
      node.textContent = value;
    },
    htmlUpdater(node, value) {
      node.innerHTML = value;
    },
    modelUpdater(node, value) {
      node.value = value;
    }
  }
}


class Compile {
  constructor(el, vm) {
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    // 获取文档碎片对象 放入内存中会减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el);

    // 编译模板
    this.compile(fragment);

    //加到根节点中
    this.el.appendChild(fragment);
  }
  isElementNode(node) {
    return node.nodeType === 1;
  }
  node2Fragment(el) {
    const f = document.createDocumentFragment();
    let firstChild;
    while (firstChild = el.firstChild) {
      f.appendChild(firstChild);
    }
    return f;
  }
  isDirective(name) {
    return name.startsWith('v-')
  }
  isEventName(attrName) {
    return attrName.startsWith('@')
  }
  compile(fragment) {
    //获取子节点
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        //元素节点
        this.compileElement(child);
      } else {
        //文本节点
        this.compileText(child);
      }

      if (child.childNodes && child.childNodes.length) {
        this.compile(child);
      }
    })
  }
  compileElement(node) {
    const attributes = node.attributes;
    [...attributes].forEach(attr => {
      const { name, value } = attr;
      if (this.isDirective(name)) { //is directive v-text v-html v-on:cilck
        const [, dirctive] = name.split('-'); // on:cilck
        const [dirName, eventName] = dirctive.split(':'); // text html model on
        // 更新数据，数据驱动视图
        compileUtil[dirName](node, value, this.vm, eventName)
        // 删除有指令的标签上的属性
        node.removeAttribute('v-' + dirctive);
      } else if (this.isEventName(name)) {
        //@click
        let [, eventName] = name.split('@');
        compileUtil['on'](node, value, this.vm, eventName)
      }
    })
  }
  compileText(node) {
    //{{}}
    const content = node.textContent;
    if (/\{\{(.+?)\}\}/.test(content)) {
      compileUtil['text'](node, content, this.vm);
    }
  }
}