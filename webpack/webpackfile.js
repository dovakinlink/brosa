const path = require('path');
const merge = require('webpack-merge');
const Webpack = require('webpack');

const ENV = process.env.NODE_ENV;

var defaults = {
  output: {
    path: path.join(process.cwd(), 'build'),
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[chunkhash:5].chunk.js',
    library: '[name]_[chunkhash]'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'app'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: {
      brosa: path.resolve(process.cwd(), 'app'),
      public: path.resolve(process.cwd(), 'public')
    },
    mainFields: ['jsnext:main', 'browser', 'main', 'style'],
    mainFiles: ['index'],
    enforceExtension: false,
    enforceModuleExtension: false
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${ENV}"`
      }
    }),
    new Webpack.NoErrorsPlugin(),
    new Webpack.HashedModuleIdsPlugin(),
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-import')(),
          require('postcss-cssnext')(),
          require('colorguard')()
        ],
        context: process.cwd()
      }
    }),
  ]
}

// This is ugly
if (ENV !== "production") {
  defaults = merge(defaults, {
    plugins: [
      new Webpack.HotModuleReplacementPlugin(),
    ]
  });
} else {
  defaults = merge(defaults, {
    plugins: [
        new Webpack.optimize.AggressiveMergingPlugin(),
        new Webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false
        }),
        new Webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
          output: {
            comments: false
          },
        })
    ]
  })
}

module.exports = defaults;
