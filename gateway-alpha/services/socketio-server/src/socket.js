const socket = require('socket.io');

const routes = require('./routes');

module.exports = (server) => {
  const io = socket(server, {
    cors: {
      origin: "*",
    },
  });

  routes(io);

  return io;
};
