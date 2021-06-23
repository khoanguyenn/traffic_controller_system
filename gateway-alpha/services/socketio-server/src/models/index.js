const { Op, Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.dbConfig);

const Device = require('./Device')(sequelize);
const Vehicle = require('./Vehicle')(sequelize);

function db() {
  Device.hasMany(Vehicle, { foreignKey: 'deviceId', as: 'vehicles' });

  return {
    sequelize,
    Sequelize,
    Op,

    Device,
    Vehicle,
  };
}

module.exports = db();
