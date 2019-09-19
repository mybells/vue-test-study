/*
 * @Author: 高建鹏
 * @Description:给npm上发布库配置项
 * @Position:
 * @Date: 2019-09-19 13:38:52
 * @LastEditors: 高建鹏
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/publishNpm/publishNpm.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/publishNpm/dist'),
    library: "mybells", //library就是webpack打包内容的名字
    libraryTarget: "umd" //libraryTarget就是配置webpack打包内容的模块方式的参数
    // commonjs/commonjs2: 将你的library暴露为CommonJS模块
    // amd: 将你的library暴露为amd模块
    // umd: 将你的library暴露为所有的模块定义下都可运行的方式
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, ]
  },
  plugins: []
}