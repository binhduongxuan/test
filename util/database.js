const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_complete',
    password: 'Binhba95'
})

module.exports = pool.promise();