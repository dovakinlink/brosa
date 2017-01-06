const clientConfiguration = require('universal-webpack').clientConfiguration;
const settings = require('./universal-webpack-settings');
const configuration = require('./webpackfile');

module.exports = clientConfiguration(configuration, settings);
