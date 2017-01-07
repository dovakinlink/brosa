const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const defaults = require('./webpackfile');

module.exports = merge.smart(defaults, {
  devtool: 'inline-source-map',
  name: 'brosa-server',
  target: 'node',
  entry: {
    server: path.join(process.cwd(), './app/brosa-server.jsx')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
            'css-loader/locals?-url&-import&modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader?limit=8192&emitFile=false'
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })
  ]
});
