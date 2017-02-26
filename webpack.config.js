var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractHTML = new ExtractTextPlugin('[name]');

module.exports = {
  entry: {
    'js/background.js': './app/background.js',
    'js/popup.js': './app/containers/Popup/index.js',
    'js/options.js': './app/containers/Options/index.js',
    'bundle.css': './app/resources.js',
    'options.html': './views/options.slim',
    'popup.html': './views/popup.slim'
  },
  resolve: {
    modules: ['node_modules']
  },
  output: {
    path: 'public/',
    filename: '[name]' // Template based on keys in entry above
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(slm|slim)$/,
        loader: extractHTML.extract({ use: ['html-loader', 'slm-loader'] })
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?digest=hex&name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?&limit=10000&minetype=application/font-woff&name=assets/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /manifest\.json$/,
        loader: 'file-loader?name=./[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    extractHTML,
    new ExtractTextPlugin({ filename: 'bundle.css' })
  ]
};
