// dbconfig.js

const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',     // MySQL server hostname
  user: 'root', // MySQL username
  password: 'rootroot', // MySQL password
  database: 'employee_db', // Name of the database you created
};

/* const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection; */

// Create a promise-based connection pool
const pool = mysql.createPool(dbConfig).promise();

pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database');
    connection.release();
  })
  .catch((err) => {
    console.error('Error connecting to MySQL database:', err);
    throw err;
  });

module.exports = pool;