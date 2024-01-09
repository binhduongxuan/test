// const mysql = require('mysql2');
//
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'nodejs_complete',
//     password: 'Binhba95'
// })
//
// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs_complete', 'root', 'Binhba95', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;