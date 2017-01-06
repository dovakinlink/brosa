const path = require('path');
const merge = require('webpack-merge');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV;

// TODO: Don't use process.cwd(), do a ../__dirname
const defaults = {
  entry: {
    app: [ './app/brosa-client.jsx' ],
    // TODO: Have a better way to bundle vendor packages
    // hardcoded is not sustainable
    vendor: [
      'react',
      'react-router',
      'react-dom',
      'react-css-modules',
      'react-proxy',
      'react-transform-hmr',
    ]
  },
  output: {
    path: path.join(process.cwd(), 'build/assets'),
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?-url&-import&modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|svg)$/,
        exclude: /node_modules/,
        loaders: [
          'url-loader?limit=8192'
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(process.cwd(), 'app'),
      'node_modules' // TODO: Do we need this?
    ],
    extensions: ['.js', '.jsx', '.json', '.css'], // TODO: Check documentation's defaults
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
    new Webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'bootstrap'],
      minChunks: Infinity
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${ENV}"`
      }
    }),
    new Webpack.NoErrorsPlugin(),
    new Webpack.HashedModuleIdsPlugin(), // TODO: vs NamedModuleIds
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
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: ENV !== "production"
    })
  ]
}

// TODO: Don't use merge.strategy
if ("production" !== ENV) {
  module.exports = merge.strategy({})(defaults, {
    devtool: 'inline-source-map',
    plugins: [
      new Webpack.HotModuleReplacementPlugin(),
      new Webpack.WatchIgnorePlugin([/node_modules/])
    ]
  });
} else {
  module.exports = merge.strategy({})(defaults, {
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
  });
}
