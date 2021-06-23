const socket = require('socket.io');

const routes = require('./routes');

module.exports = server => {
  const io = socket(server);

  routes(io);

  return io;
};
