var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

console.log(resolve('src'));



var webpackConfig={
  entry: {
    appJS: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
    //publicPath影响的是页面上的资源的路径 192.168.1.1/aaa/index.html
    //访问首页也要加上/aaa/index.html 实际上这个aaa是不存在的是自己取得名字
    //比如开发环境引入图片的url是<img src='/pic.jpg'>,而生产环境则是<img src='http://aliyun.cdn.com/pic.jpg'>。这就是output的publicPath的作用
  },
  resolve: {
    //import时可以省去后缀名js vue json
    extensions: ['.js', '.vue', '.json','.less'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.less$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      //图片要在.vue或者html文件里实实在在引到了才会被打包 页面里引用图片的路径是相对于当前页面的路径来引图片的
      //比如a1.vue文件和images同级那么直接<img src="./images/xxx.jpg"> 来引入 路径解析url-loader会帮我们解决
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 13000,//小于1.3m的会被转成base64 data:image/gif;base64,R0lGO3MTa7FSWzPT6的形式
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
};


const vuxLoader = require('vux-loader')
module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui','duplicate-style',{
    name: 'less-theme',
    path: 'src/theme.less' // 相对项目根目录路径
  }]
})

