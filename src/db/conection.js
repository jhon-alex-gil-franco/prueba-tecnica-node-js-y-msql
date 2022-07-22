
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueba_db'
});

mysqlConnection.connect((err)=> {
    if (err) throw err
      
    console.log('DB Connected');
    
  });


module.exports =  mysqlConnection ;

