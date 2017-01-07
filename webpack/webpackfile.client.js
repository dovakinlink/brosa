const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const defaults = require('./webpackfile');

const ENV = process.env.NODE_ENV;

module.exports = merge.smart(defaults, {
  devtool: 'inline-source-map',
  name: 'brosa-client',
  entry: {
    app: path.join(process.cwd(), './app/brosa-client.jsx'),
    vendor: [
      'react',
      'react-router',
      'react-dom',
      'react-css-modules',
      'react-transform-hmr',
      'history',
      'fbjs'
    ]
  },
  output: {
    path: path.join(process.cwd(), 'build/assets'),
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?-url&-import&modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'bootstrap'],
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': JSON.stringify('development/client')
      }
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: ENV !== "production"
    })
  ]
});
