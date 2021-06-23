const healthCheck = require('./healthcheck');
const docHandler = require('./doc');
const deviceHandler = require('./device');

const errorHandler = require('./errorHandler');

module.exports = app => {
  healthCheck(app);

  docHandler(app);

  deviceHandler(app);

  errorHandler(app);
};
