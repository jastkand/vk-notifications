var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractHTML = new ExtractTextPlugin('[name]')

module.exports = {
  entry: {
    'js/background.js': './javascripts/background.coffee',
    'js/options.js': './javascripts/options.coffee',
    'js/popup.js': './javascripts/popup.coffee',
    'options.html': './views/options.slim',
    'popup.html': './views/popup.slim'
  },
  output: {
    path: 'public/',
    filename: '[name]' // Template based on keys in entry above
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.(slm|slim)$/, loader: extractHTML.extract(['html', 'slm']) },
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  },
  plugins: [
    extractHTML,
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
