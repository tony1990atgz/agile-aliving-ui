const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(src) {
  return path.join(__dirname, src)
}

const COMPONENTS_DIR = resolve('components')
const dirs = fs.readdirSync(COMPONENTS_DIR).reduce((entries, dir) => {
  const fullDir = path.join(COMPONENTS_DIR, dir)
  const entry = path.join(fullDir, 'index.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries[dir] = ['webpack-hot-middleware/client', entry]
  }
  return entries
}, {})

module.exports = {
  mode: 'development',
  entry:  {
    main: resolve('./index.js'),
    ...dirs
  },
  output: {
    path: resolve('__build__'),
    filename: '[name].js',
    publicPath: '/__build__/'
  },
  resolve: {
    alias: {
      'static' : path.join(__dirname, 'static')
    },
    extensions: ['.js', '.css', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.styl(us)?$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}