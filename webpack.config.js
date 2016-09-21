var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractHTML = new ExtractTextPlugin('[name]');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'js/background.js': './javascripts/background.coffee',
    'js/options.js': './javascripts/options.coffee',
    'js/popup.js': './app/containers/Popup/index.js',
    'bundle.css': './javascripts/resources.js',
    'options.html': './views/options.slim',
    'popup.html': './views/popup.slim'
  },
  resolve: {
      modulesDirectories: ['node_modules']
  },
  output: {
    path: 'public/',
    filename: '[name]' // Template based on keys in entry above
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.(slm|slim)$/, loader: extractHTML.extract(['html', 'slm']) },
      { test: /\.(css|scss)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?digest=hex&name=assets/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?&limit=10000&minetype=application/font-woff&name=assets/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=assets/[name].[ext]'
      },
      {
        test: /manifest\.json$/,
        loader: 'file?name=./[name].[ext]'
      }
    ]
  },
  postcss: [autoprefixer({ browsers: ['last 5 Chrome versions'] })],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.coffee']
  },
  plugins: [
    extractHTML,
    new ExtractTextPlugin('bundle.css'),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
