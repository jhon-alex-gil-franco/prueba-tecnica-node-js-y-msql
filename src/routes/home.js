const express = require('express');
const app = express();


app.get('/',(req, res)=>{ res.render('home')});

module.exports = app; 