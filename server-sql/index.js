//set up express server
const express = require('express');
const app = express();
const port = 8081;

//set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//set up cors
const cors = require('cors');
app.use(cors());

//set up routes
const contact = require('./contact');
app.use('/api', contact);

//default route
app.get('/', (req, res) => {
    res.send('Hello World from Address Book API!');
});


//start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



