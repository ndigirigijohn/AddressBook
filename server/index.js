//set up an express server
const express = require('express');
const app = express();
const port = 8080;

//connect to MariaDB skySql database
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'address'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to MariaDB!');
});


//set up a route to handle get requests to the homepage
app.get('/', (req, res) => res.send('Hello World!'));

//tell the express app to listen on port 3000

app.listen(port, () => console.log(`Adsress App Running on port ${port}!`));
