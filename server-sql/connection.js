//connect to database
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin_user',
  password: 'secret_password',
  database: 'AddressBook'
});

connection.connect((err) => {
    
    if (err) throw err;
    console.log('Connected to MariaDB');
  });
  

  //export connection
 module.exports = connection;
