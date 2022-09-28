const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbProduto', 'root', '',
{
    dialect: 'mysql', 
    host: 'localhost', 
    port: 3306
});

module.exports = sequelize;