const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

// initialize app
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'solotravelertest'
});

// this doesnt work
// Listen to POST requests to /users.
app.post('/users', function(req, res) {
    // Get sent data.
    var user = req.body;
    // Do a MySQL query.
    var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
      // Neat!
    });
    res.end('Success');
  });

/*connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});*/

/* connection.connect();

connection.query('SELECT * from traits',
    function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
    
        console.log('The reponse is: ', rows);
  });
  
connection.end(); */

//require('./routes.js')(app);

// start server
app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
})

//module.exports = connection;
