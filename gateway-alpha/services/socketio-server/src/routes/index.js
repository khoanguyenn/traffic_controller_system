const connectionHandler = require('./connection');

module.exports = io => {
  connectionHandler(io);
};
