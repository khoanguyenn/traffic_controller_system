const { DataTypes, Model, Sequelize } = require('sequelize');

class Device extends Model {}

module.exports = sequelize => {
  Device.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: Sequelize.fn('uuid_generate_v4'),
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: Sequelize.fn('now'),
    },
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'devices',
  });
  return Device;
};
