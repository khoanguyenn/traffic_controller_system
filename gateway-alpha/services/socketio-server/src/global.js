// environment
require('dotenv').config();

// config

const config = require('./config');

global.config = config;

// logger
const logger = require('./utils/logger');

global.logger = logger;

module.exports = { };
