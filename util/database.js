const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'deva@sheesh', {
  dialect: 'mysql',
  // dialectModule: 'mysql2',
  host: 'localhost'
});

module.exports = sequelize;