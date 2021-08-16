const { Sequelize } = require('sequelize')

module.exports = new Sequelize('sqlite::memory:', {
  define: {
    freezeTableName: true
  }
});