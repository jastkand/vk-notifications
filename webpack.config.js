var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractHTML = new ExtractTextPlugin('[name]');

module.exports = {
  entry: {
    'js/background.js': './app/background.js',
    'js/popup.js': './app/containers/Popup/index.js',
    'js/options.js': './app/containers/Options/index.js',
    'bundle.css': './app/resources.js',
    'options.html': './views/options.html',
    'popup.html': './views/popup.html'
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
        exclude: /node_modules/
      },
      {
        test: /\.(html)$/,
        loader: extractHTML.extract({ use: ['html-loader'] })
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
        use: [
          {
            loader: 'file-loader',
            options: {
              digest: 'hex',
              name: 'assets/[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false
              },
              bypassOnDebug: true,
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff',
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      },
      {
        test: /manifest\.json$/,
        loader: 'file-loader',
        options: {
          name: './[name].[ext]'
        }
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
