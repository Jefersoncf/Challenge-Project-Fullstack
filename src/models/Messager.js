const Sequelize = require('sequelize');
const db = require('./db');

const Message = db.sequelize.define('info_message', {
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
// Message.sync({force: true});

module.exports = Message;