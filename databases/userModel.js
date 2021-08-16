const {DataTypes} = require('sequelize')
const database = require('./index');

module.exports = database.define('users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED,
    default: 0
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  }
}, {
  timestamps: true
});
