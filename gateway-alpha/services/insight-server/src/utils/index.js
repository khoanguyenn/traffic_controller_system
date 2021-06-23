const logger = require('./logger');
const validate = require('./validate');
const token = require('./token');

module.exports = {
  logger,
  validate,
  ...token,
};
