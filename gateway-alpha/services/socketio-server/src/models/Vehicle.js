const { DataTypes, Model, Sequelize } = require('sequelize');

class Vehicle extends Model {}

module.exports = sequelize => {
  Vehicle.init({
    deviceId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'devices',
        key: 'id',
      },
      field: 'device_id',
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }, {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehicles',
    timestamps: false,
  });
  Vehicle.removeAttribute('id');
  return Vehicle;
};
