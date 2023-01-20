

//set up an express server
const express = require('express');
const app = express();
const port = 8080;
//enable json parsing
app.use(express.json());

//use cors
const cors = require('cors');

app.use(cors());

//use dotenv
require('dotenv').config();

//connect to database
const { connectDB } = require('./config');

connectDB();

//use routes
app.use('/', require('./routes/contact'));

app.use('/user', require('./routes/user'));



//set up a route to handle get requests to the homepage
app.get('/', (req, res) => res.send('Hello World!'));

//tell the express app to listen on port 3000

app.listen(port, () => console.log(`Adsress App Running on port ${port}!`));
