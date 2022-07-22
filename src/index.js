require('./config/config');

const bodyParser = require('body-parser');
const express = require('express')
const app = express();


// Settings
port=process.env.PORT;

// // Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// public folder
app.use(express.static(__dirname + '/public'));


//routes
app.use(require('./routes/content'))
app.use(require('./routes/home'))

// Starting the server
app.listen(port, () => { 
  console.log('Server Online');
}); 

 
