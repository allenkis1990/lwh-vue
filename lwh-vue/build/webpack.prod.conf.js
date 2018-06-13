var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')//压缩CSS
var env = config.build.env
// 利用webpack-merge 合并我们的baseWebpackConfig配置。 webpack-merge能够让你动态改变webpack配置

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),//输出出来的文件名也可以加路径
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')//require.ensure按需加载的时候生成的按需的块js文件
    //publicPath:'/lwh'//对于生产环境来说publicPath就是在所有引用道德路径前面加上/lwh

    // 添加chunkhash值，指每次构建的值都不一样，业务代码经常变化，添加chunkhash避免浏览器缓存使用旧代码
    // chunkhash与hash区别在于：前者是每次构建都不一样，后者是只要你的文件名是一样的，是不会变化的，一般用chunkhash多一些
  },


  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // DefinePlugin用于在webpack构建中，定义参数，然后你可以在webpack构建配置中引用这个参数做一些配置上的判断，赋值
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // js压缩插件，用于代码压缩，然后去掉注释，生成soucemap便于调试定位问题
    // 构建生产环境生成sourcemap比较耗时，一般你也可以不用，在开发环境才生成sourcemap
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    // 正如上面的英文注释一样，这个插件主要是将css内容独立抽出来，而不是变成一个js模块绑如bundle中
    // 官网说：这样能够加快整体构建速度，同时有利于js和css分开
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),

    //压缩CSS optimize-css-assets-webpack-plugin@3.2.0版本
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,//这里和output的路径关联 如果是aa/aa.html那就是在dist下生成路径aa并取名
      template: 'index.html',//模板的路径
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

var path=require('path');
var fs=require('fs');
fs.writeFile(path.join(__dirname,'111.json'),JSON.stringify(webpackConfig),function(err){
  console.log('success!');
});
//console.log(JSON.stringify(webpackConfig));

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
