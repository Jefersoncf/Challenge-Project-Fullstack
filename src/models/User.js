const Sequelize = require('sequelize');
const db = require('./db');

const User = db.sequelize.define('users', {
    id:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    message:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
});
//cria a tabela
// User.sync({force: true});

module.exports = User;