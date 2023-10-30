const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./database.js');

var transaction = sequelize.define('transactions', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    company : {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    messageId: {
        type: DataTypes.STRING,
        allowNull: false
    }

});
module.exports = transaction;
// export default transaction;