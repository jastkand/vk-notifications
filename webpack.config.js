const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devMode = process.env.NODE_ENV !== 'production';
const isAnalyze = process.env.BUNDLE_ANALYZE === '1';

let config = {
  entry: {
    background: './app/background.js',
    popup: './app/Popup.js',
    options: './app/Options.js'
  },
  resolve: {
    modules: ['node_modules']
  },
  output: {
    path: __dirname + '/public/app/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /^\?raw$/,
            use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
            ],
          },
          {
            use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  },
                  importLoaders: 1,
                }
              },
              'postcss-loader',
            ],
          },
        ]
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
          publicPath: 'app'
        }
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
  ],
  devtool: 'cheap-module-source-map'
};

if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
