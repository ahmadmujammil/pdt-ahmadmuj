// Node.js
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'mysql-master',
  user: 'root',
  password: 'rootpassword',
  database: 'ecommerce'
});
