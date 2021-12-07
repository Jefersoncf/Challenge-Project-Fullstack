const Sequelize = require('sequelize');

const sequelize = new Sequelize('transpdb', 'root', '2550',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize: sequelize, Sequelize: Sequelize}
