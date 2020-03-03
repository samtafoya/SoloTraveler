const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

// initialize app
const app = express();

/**/
var urlGetHello = "/api/hello";
app.get(urlGetHello, (req, res) => {
    var str = urlGetHello + " (GET) " + "just called";
    console.log(str);
    res.send({express: str});
});

// this doesnt work
// Listen to POST requests to /users.
var urlGetUsers = "/api/users";
app.get(urlGetUsers, (req, res) => {
    var str = urlGetUsers + " (GET) just called...";
    console.log(str);
    res.send({express: str});
});

var urlGetUser = "/api/user";   // <-- Notice SINGULAR verb
app.post(urlGetUser, function(req, res) {
    // Get sent data.
    var user = req.body;
    console.log(user);
    // Do a MySQL query.
    //var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
    var str = urlGetUser + " (POST) " + "just called with '" + req.body + "'";
    console.log(str);
    res.send({express: str});
});
/**/

// start server
app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
});

/**
connection.connect(function(err){
    (err)? console.log(err): console.log(connection);
});
**/

/**/
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'password',
    password: 'root',
    database: 'solotravelertest',
    //insecureAuth : true,
});

connection.connect();

var sqlString = "SELECT * FROM account";
//var sqlString = "SELECT * FROM traits";
//var sqlString = "UPDATE traits SET ...";
connection.query(sqlString,
    function (err, rows, fields) {
        if (err) {
            console.log(err);
        }
    
        console.log('The reponse is: ', rows);
  });
  
connection.end();
/**/

//require('./routes.js')(app);

//module.exports = connection;
