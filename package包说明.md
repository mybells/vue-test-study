{
  "name": "js",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/mybells/js.git",
  "author": "mybells <435541908@qq.com>",
  "license": "MIT",
  "scripts": {
    "start": "webpack",
    "serve": "webpack-dev-server --open",
    "build": "webpack ./src/htmlImport/import与require.js --output-path='./src/htmlImport/dist'"
  },
  "devDependencies": {
    //"autoprefixer": "^7.1.2",//autoprefixer作为postcss插件用来解析CSS补充前缀，例如 display: flex会补充为display:-webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex。//这个插件需要使用browserslistrc来工作，
    //"chalk": "^2.0.1",//用来在命令行输出不同颜色文字
    "babel-core": "^6.26.3",//babel的核心，把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理。
    "babel-eslint": "^10.0.3",//babel-eslint可以对所有有效的babel代码进行lint处理。
    "babel-loader": "^7.1.5",//使项目运行使用Babel和webpack来传输js文件，使用babel-core提供的api进行转译
    "babel-plugin-syntax-jsx": "^6.18.0",//支持jsx
    "babel-plugin-transform-runtime": "^6.23.0",//替代@babel/polyfill避免污染全局环境，//避免编译输出中的重复，直接编译到build环境中
    "babel-plugin-transform-vue-jsx": "^3.7.0",//编译vue jsx//babel转译过程中使用到的插件，避免重复
    "babel-preset-env": "^1.7.0",//转为es5，transform阶段使用到的插件之一
    "babel-preset-stage-2": "^6.24.1",//ECMAScript第二阶段的规范
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.2.0",
    "postcss-loader": "^3.0.0",//PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。https://github.com/postcss/postcss/blob/master/README-cn.md
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "eslint": "^6.4.0",//eslint校验
    "eslint-config-standard": "^14.1.0",//eslint标准配置
    "eslint-loader": "^3.0.0",//webpack
    "eslint-plugin-html": "^6.0.0",//"eslint-config-standard"依赖
    "eslint-plugin-import": "^2.18.2",//"eslint-config-standard"依赖
    "eslint-plugin-node": "^10.0.0",//"eslint-config-standard"依赖
    "eslint-plugin-promise": "^4.2.1",//"eslint-config-standard"依赖
    "eslint-plugin-standard": "^4.0.1",//"eslint-config-standard"依赖
    "eslint-plugin-vue": "^5.2.3",//vue文件校验插件，就是再eslint基础上多了vue校验项。
    "file-loader": "^4.2.0",
    "html-webpack-plugin": "^3.2.0",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.2",
    "vue-loader": "^15.7.1",
    "vue-template-compiler": "^2.6.10",//这个包可以用来预编译VUE模板到渲染函数，以避免运行时编译开销和CSP限制
    "webpack": "^4.39.2",
    "webpack-cli": "^3.3.6"
    //"webpack-merge": "^4.1.0"//它将数组和合并对象创建一个新对象。如果遇到函数，它将执行它们，通过算法运行结果，然后再次将返回的值封装在函数中
  },
  "dependencies": {
    "axios": "^0.19.0",
    "babel-helper-vue-jsx-merge-props": "2.0.0",//预制babel-template函数，提供给vue,jsx等使用
    "element-ui": "^2.11.1",
    "mybellss": "1.0.1",
    "vue": "^2.6.10",
    "vue-router": "^3.1.3",
    "vuex": "^3.1.1",
    "webpack-dev-server": "^3.8.0"
  }
}
