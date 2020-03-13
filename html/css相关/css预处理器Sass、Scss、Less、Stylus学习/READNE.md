## Sass安装
sass基于Ruby语言开发而成，因此安装sass前需要安装Ruby。（注:mac下自带Ruby无需在安装Ruby!）

window下安装SASS首先需要安装Ruby，先从官网[下载Ruby](https://rubyinstaller.org/downloads/)并安装。安装过程中请注意勾选Add Ruby executables to your PATH添加到系统环境变量。
1. 安装Ruby
2. `gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/`
3. `gem install sass`

编译命令具体查看[<https://www.sass.hk/install/>](https://www.sass.hk/install/)

//单文件转换命令
sass input.scss output.css


## Scss与Sass区别
SCSS 是 Sass 3 引入新的语法，其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

文件扩展名不同，Sass 是以".sass"后缀为扩展名，而 SCSS 是以".scss"后缀为扩展名

语法书写方式不同，Sass 是以严格的缩进式语法规则来书写，**不带大括号({})和分号(;)**，而 SCSS 的语法书写和我们的 CSS 语法书写方式非常类似。

## Less安装使用
<https://less.bootcss.com/#overview>

在node环境下使用：
  1. `npm install -g less`
  2. `lessc styles.less styles.css`

## Stylus安装使用
<https://stylus.bootcss.com/>

<https://github.com/stylus/stylus>

在node环境下使用：
  1. `npm install stylus -g`
  2. `stylus -w style.styl -o style.css`