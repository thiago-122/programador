require('dotenv').config();  // Cargar variables de entorno
const mysql = require('mysql');
const util = require('util');

// Crear un pool de conexiones
const pool = mysql.createPool({
connectionLimit: 10,
host: process.env.MYSQL_HOST,
user: process.env.MYSQL_USER,
password: process.env.MYSQL_PASSWORD,
database: process.env.MYSQL_DB_NAME
});

// Promisificar la función query para usar async/await
pool.query = util.promisify(pool.query);

module.exports = pool;