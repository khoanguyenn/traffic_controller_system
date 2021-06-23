module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  hostName: process.env.HOSTNAME || 'localhost',
  hostUrl: process.env.HOSTURL,
  port: parseInt(process.env.PORT || '4000', 10),
};
