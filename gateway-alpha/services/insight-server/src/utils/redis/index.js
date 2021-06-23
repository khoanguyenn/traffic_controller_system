const { redisStore } = require('./stores');
const RedisJson = require('./redisJson');

module.exports = {
  redis: redisStore,
  redisJson: new RedisJson(redisStore),
};
