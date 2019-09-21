const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
  mode:'development',
  // mode:'production',
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist'),
    library: "mybells",//library就是webpack打包内容的名字,对发布npm包有用
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
      'vue$': 'vue/dist/vue.esm.js', // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      '@': path.resolve(__dirname,'src'),
    }
  },
  devServer: {
    hot:true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true // 关闭热重载
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        oneOf: [
          // 这里匹配 `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 2,
                }
              },
              'postcss-loader',
              'stylus-loader'
            ]
          },
          // 这里匹配普通的 `<style>` 或 `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
              'stylus-loader'
            ]
          }
        ]
      },
      {
        test: /\.css$/,
        oneOf: [
          // 这里匹配 `<style module>`
          {
            resourceQuery: /module/,//js中只有import xxx from 'xxx.css?module'这个能匹配到。否则不生效
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1//https://github.com/webpack-contrib/css-loader#importloaders
                }
              },
              'postcss-loader'//PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。https://github.com/postcss/postcss/blob/master/README-cn.md
            ]
          },
          // 这里匹配普通的 `<style>` 或 `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader'
            ]
          },
          // {//匹配xxx.module.css会走这
          //   test: /\.module\.\w+$/,
          //   use: [
          //     'vue-style-loader',
          //     /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
          //     {
          //       loader: 'css-loader',
          //       options: {
          //         modules: true,
          //       }
          //     }
          //   ]
          // }
        ]
      },
      {
        test: /\.less$/,
        // resourceQuery: /module/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,//只能用modules模式加载`<style module>`
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ]
}