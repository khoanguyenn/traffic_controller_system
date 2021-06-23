const container = require('./container');
const logs = require('./logs');
const db = require('./db');
const rtmp = require('./rtmp');

const config = {
  ...container,
  ...logs,
  ...db,
  ...rtmp,
};

module.exports = config;
