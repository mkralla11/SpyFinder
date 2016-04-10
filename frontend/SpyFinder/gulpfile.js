'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var nodeEnv = null;
var config = {};
var file = require('gulp-file');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var glob = require('glob');

gulp.task('webpack-dev', function(){
  var webpackDev = require('./webpack.dev_asset_server.js');
  webpackDev.start();
});


/*
* Main gulp tasks are below:
* watch
*
*/
gulp.task('watch', function(callback) {
  process.env.NODE_ENV = nodeEnv = 'development';
  runSequence(
    'webpack-dev'
  )
});


gulp.task('default', function() {
  console.log('Run "gulp watch" (gulp build not needed for now)');
});
