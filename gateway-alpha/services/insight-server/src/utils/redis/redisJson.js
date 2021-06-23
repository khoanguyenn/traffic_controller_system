const _ = require('lodash');

class RedisJson {
  constructor(redisClient) {
    this.redis = redisClient;
  }

  async save(key, jsonObj, timeout) {
    const value = await this.redis.getAsync(key);
    if (!value) {
      return this.set(key, jsonObj, timeout);
    }
    return this.update(key, jsonObj, timeout);
  }

  async update(key, jsonObj, timeout) {
    await this.redis.delAsync(key);
    await this.set(key, jsonObj, timeout);
  }

  async updateTTL(key, timeout) {
    await this.redis.expireAsync(key, timeout);
  }

  async set(key, jsonObj, timeout) {
    await this.redis.setAsync(key, JSON.stringify(jsonObj));
    if (timeout) {
      await this.redis.expireAsync(key, timeout);
    }
  }

  async get(key) {
    const result = await this.redis.getAsync(key);
    if (!result) {
      return undefined;
    }

    if (typeof result === 'string') {
      return JSON.parse(result);
    }
    if (Array.isArray(result)) {
      return _.map(result, val => JSON.parse(val));
    }
    return undefined;
  }

  async scanKey(pattern, cursor = '0') {
    const reply = await this.redis.scanAsync(cursor, 'MATCH', pattern, 'COUNT', '100');
    const [next, keys] = reply;
    return { next, keys };
  }

  async getKeys(pattern) {
    const keys = [];
    let next = '0';

    if (!pattern) {
      return keys;
    }

    do {
      const result = await this.scanKey(pattern, next); // eslint-disable-line
      keys.push(...result.keys);
      next = result.next;
    } while (next !== '0');
    return keys;
  }

  async getWithKeyPattern(pattern) {
    const keys = await this.getKeys(pattern);
    const promises = _.map(keys, async key => this.get(key));

    const values = await Promise.all(promises);
    return values;
  }

  async getOneKeyWithPattern(pattern, curror = '0') {
    const { keys, next } = await this.scanKey(pattern, curror);

    if (keys && keys.length) {
      return keys[0];
    }
    if (!keys.length && next === '0') {
      return undefined;
    }
    return this.getOneKeyWithPattern(pattern, next);
  }

  async getOneWithKeyPattern(pattern) {
    const key = await this.getOneKeyWithPattern(pattern);

    if (!key) {
      return undefined;
    }
    const value = await this.get(key);
    return { key, value };
  }

  async delWithKeyPattern(pattern) {
    const keys = await this.getKeys(pattern);
    const promises = _.map(keys, async key => this.redis.delAsync(key));
    await Promise.all(promises);
  }

  async delOneKey(key) {
    this.redis.delAsync(key);
  }

  async getExpireTime(key) {
    const expireTime = await this.redis.ttlAsync(key);
    return expireTime;
  }
}

module.exports = RedisJson;
