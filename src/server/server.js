const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

//conncection .connect inside connection.app post then connection.end after that

// https://hashnode.com/post/how-can-use-react-js-node-js-mysql-together-cjdlfbukh01vqn9wuaucmng6h/

// initialize app
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',

    // These should be config values where each dev has a config
    // file locally so it doesn't have to be hacked manually like this.
    password: 'password',   // Sammi's password
    //password: 'root',     // John's password

    database: 'solotravelertest',
    //insecureAuth : true,
});

/**
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
**/

/**/
var urlGetHello = "/api/hello";
app.get(urlGetHello, (req, res) => {
    var str = urlGetHello + " (GET) " + "just called";
    console.log(str);
    res.send({ express: str });
});

// this doesnt work
// Listen to POST requests to /users.
var urlGetUsers = "/api/users";
app.get(urlGetUsers, (req, res) => {
    var str = urlGetUsers + " (GET) just called...";
    console.log(str);
    res.send({ express: str });
});

/*app.post('/api/user', (req, res) => {
    connection.connect();
    console.log(req.body);
    res.send(
     // `I received your POST request. This is what you sent me: ${req.body.post}`,
     "hello"
    );
  });*/

//connection.connect();

var urlGetUser = "/api/user";   // <-- Notice SINGULAR verb
app.post(urlGetUser, function (req, res) {
    // Get sent data.
    //var user = req.body;
    //console.log(user);
    // Avoid variables with possibly conflicting names. E.g. use queryStr instead of query:
    //var query [[[<-- use queryStr instead]]] = mysql.format(queryStr, user);


    // Create a fake JSON
    var userJson = {firstName: 'Joe', lastName: 'Cool', email: 'asdf@example.com', age: '33', passWord: 'dsdfsfda'};


    // Do a MySQL query.
    var queryStr = 'INSERT INTO account ';
    queryStr += "(`first_name`, `last_name`, `email`, `age`, `pass_word`) ";
    queryStr += "VALUES (";
    queryStr += "'" + userJson.firstName + "', '" + userJson.lastName + "', '" + userJson.email + "', '" + userJson.age + "', '" + userJson.passWord + "'";
    queryStr += ")";
    console.log(queryStr);

    //var test = mysql.format('INSERT INTO account SET ?', user);

    // Start the MySQL connection
    connection.connect();

    connection.query(queryStr, function (err, result) {
        if (err) {
            console.log(err);
        }
        //console.log('The reponse is: ', user);
    });

    // End/stop/close the MySQL connection
    connection.end();

    var str = urlGetUser + " (POST) " + "just called " + req.body;
    //console.log(JSON.parse(user));
    res.send({ express: str });
});

//connection.end();
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

/*connection.connect();

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

connection.end(); */
/**/

//require('./routes.js')(app);

//module.exports = connection;
