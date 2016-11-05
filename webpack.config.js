var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    main: './src/main.jsx',
    about: './src/about.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
