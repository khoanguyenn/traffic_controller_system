const { Op, Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.dbConfig);

const Device = require('./Device')(sequelize);

module.exports = {
  sequelize,
  Sequelize,
  Op,

  Device,
};
