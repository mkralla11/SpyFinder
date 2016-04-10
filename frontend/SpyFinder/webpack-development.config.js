var Path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin') 
// var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackHost = 'http://localhost:4002/';
var gutil = require('gulp-util');
var nodeExternals = require('webpack-node-externals');
var env = process.env.MIX_ENV || 'dev';
var prod = env === 'prod';
const PATHS = {  
  appAssets: Path.join(__dirname, 'src'),
  build: Path.join(__dirname, 'build')
}

var entries = {
  index: [
    Path.join(PATHS.appAssets, 'index.js')
  ]
}

var hot = 'webpack-hot-middleware/client?path=' +
  webpackHost + '__webpack_hmr'


var plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PROD: prod,
    __DEV: env === 'dev'
  }),
  new CopyWebpackPlugin([
    {
      from: PATHS.appAssets
    }
  ])
]

plugins.push(new webpack.HotModuleReplacementPlugin())
entries.index.unshift(hot)


module.exports = {
  entry: entries,
  devtool: 'eval-source-map',
  // externals: [nodeExternals()],
  resolve: {
    extensions: ['', '.js', '.css', '.less'],
    root: PATHS.appAssets,
    alias: {
      // below, list global/mixin files to be imported VIA less (See naming solution/reasoning at https://github.com/webpack/less-loader/issues/32)
      "lesshat.less":         PATHS.appAssets + '/stylesheets/lesshat.less',
      'global_styles.less':   PATHS.appAssets + '/stylesheets/global_styles.less'
    }
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: webpackHost
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.appAssets
      },
      {
        test: /\.(css|less)$/,
        loader: "style!css!less",
        include: PATHS.appAssets
      },
      {
        test: /\.(png|jpg|jpeg|gif|bmp)$/,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: PATHS.appAssets
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file',
        include: PATHS.appAssets
      }
    ]
  }
}