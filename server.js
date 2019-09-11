const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleWare = require('webpack-dev-middleware')
const webpackHotMiddleWare = require('webpack-hot-middleware')
const path = require('path')
const config = require('./webpack.dev.config')

const app = express()
const compiler = webpack(config)
const router = express.Router()

app.use(webpackDevMiddleWare(compiler, {
  publicPath: '/__build__/',
  stats: {
    colors: true,
    chunks: false
  }
}))

app.use(webpackHotMiddleWare(compiler))

app.use(express.static(__dirname))


router.get('/base', (req, res) => {
  res.json({
    status: 'ok',
    msg: '+666'
  })
})

app.use(router)

const PORT = 8899

module.exports = app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}, Ctrl+C to stop`)
})