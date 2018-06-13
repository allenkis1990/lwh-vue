// https://github.com/shelljs/shelljs
require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')// 一个用于在命令窗口提示类似程序处理中，loading中之类文字，以起到提醒标注作用
var path = require('path')
var chalk = require('chalk')// 在命令窗口输出有颜色的文字工具包
var shell = require('shelljs')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')


// 一个用于在命令窗口提示类似程序处理中，loading中之类文字，以起到提醒标注作用
var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
shell.rm('-rf', assetsPath)//删除dist下的static文件夹
shell.mkdir('-p', assetsPath)//在dist下新建一个static文件夹
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)//拷贝静态资源文件夹static到dist的static文件夹下
shell.config.silent = false

//也可以在插件里面这样拷贝static
/*new CopyWebpackPlugin([
  {
    from: path.resolve(__dirname, '../static'),
    to: config.build.assetsSubDirectory,
    ignore: ['.*']
  }
])*/

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))

  // 在命令窗口输出有颜色的文字工具包
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})






// rm 帮我们每次构建前，清理一下之前构建好的旧文件，清理完后执行回调函数
// 回调函数里执行webpack打包
/*rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {   //webpack打包后执行回调函数，向控制台输出自己构建结果信息
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})*/






