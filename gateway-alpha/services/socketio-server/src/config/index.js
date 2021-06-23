const container = require('./container');
const db = require('./db');
const logs = require('./logs');

module.exports = {
  ...container,
  ...db,
  ...logs,
};
