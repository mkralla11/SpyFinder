#!/usr/bin/env node
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack-development.config')

module.exports = {
  start: function(){
    var compiler = webpack(config)
    var app = express()
    app.use(require('cors')())

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }))

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log
    }))

    app.listen(4002, 'localhost', function (err) {
      if (err) return console.error(err)
      console.log('hot swap dev server running on localhost:4002')
    })

    // Exit on end of STDIN
    process.stdin.resume()
    process.stdin.on('end', function () {
      process.exit(0)
    })
  }
}