const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve(src) {
  return path.join(__dirname, src)
}

const COMPONENTS_DIR = resolve('components')
const dirs = fs.readdirSync(COMPONENTS_DIR).reduce((entries, dir) => {
  const fullDir = path.join(COMPONENTS_DIR, dir)
  const entry = path.join(fullDir, 'index.js')
  if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
    entries['/lib/' + dir] = entry
  }
  return entries
}, {})

module.exports = {
  entry:  {
    main: resolve('./index.js'),
    ...dirs
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    library: 'agile',
    libraryTarget: 'umd'
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
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'url-loader?limit=1000000'
      }
    ]
  },
  // devtool: 'source-map',
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}