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
    password: 'password',
    //password: 'root',
    database: 'solotravelertest',
    //insecureAuth : true,
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
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

connection.connect();

var urlGetUser = "/api/user";   // <-- Notice SINGULAR verb
app.post(urlGetUser, function (req, res) {
    // Get sent data.
    var user = req.body;
    // Do a MySQL query.
    var query = mysql.format('INSERT INTO account VALUES (11, ?, "test", "test", 19, "test", CURRENT_TIMESTAMP)', user);

    var test = mysql.format('INSERT INTO account SET ?', user);

    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
        }

        //console.log('The reponse is: ', user);
    });

    var str = urlGetUser + " (POST) " + "just called " + req.body;
    console.log(JSON.parse(user));
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
