module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  hostName: process.env.HOSTNAME || 'socketio-server',
  port: parseInt(process.env.PORT || '5000', 10),
};
