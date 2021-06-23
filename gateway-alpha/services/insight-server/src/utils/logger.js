const fs = require('fs-extra');
const moment = require('moment');
const { createLogger, transports, format } = require('winston');
const config = require('../config');

function timestamp() {
  const now = moment();
  return now.format('YYYY-MM-DD[T]HH:mm:ss.SSSZ');
}

fs.ensureDir(config.logLocation);

const logger = createLogger({
  transports: [
    new (transports.Console)({
      format: format.json(),
      timestamp,
    }),
  ],
  exitOnError: false,
  levels: {
    debug: 4,
    info: 3,
    silly: 2,
    warn: 1,
    error: 0,
  },
});

module.exports = logger;
