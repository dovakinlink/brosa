const serverConfiguration = require('universal-webpack').serverConfiguration;
const settings = require('./universal-webpack-settings');
const configuration = require('./webpackfile');

module.exports = serverConfiguration(configuration, settings);
