const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
// const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
  mode:'development',
  // mode:'production',
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist'),
    library: "mybells",//library就是webpack打包内容的名字
    libraryTarget: "umd"//libraryTarget就是配置webpack打包内容的模块方式的参数
    // commonjs/commonjs2: 将你的library暴露为CommonJS模块
    // amd: 将你的library暴露为amd模块
    // umd: 将你的library暴露为所有的模块定义下都可运行的方式
  },
  // externals: {
  //   vue: 'Vue',
  // },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ]
}