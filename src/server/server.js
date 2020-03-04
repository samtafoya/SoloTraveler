const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

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

var idCount = 9;
connection.connect();

var urlGetUser = "/api/user";   // <-- Notice SINGULAR verb
app.post(urlGetUser, function (req, res) {

    // Get sent data.
    var user = req.body.post;
    idCount++;

    // Do a MySQL query.
    var query = mysql.format('INSERT INTO account VALUES ("' + idCount + '", ?, "test", "test", 19, "test", CURRENT_TIMESTAMP)', user);
    //var test = mysql.format('INSERT INTO account (id, first_name) SET ?, ?', user, user);

    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
        }

        //console.log('The reponse is: ', user);
    });

    //var str = urlGetUser + " (POST) " + "just called " + req.body;
    var str = "Logged In!"
    //console.log(JSON.parse(user));
    console.log(user);
    res.send({ express: str });
});

var urlGetLogin = "/api/login";   // <-- Notice SINGULAR verb
app.post(urlGetLogin, function (req, res) {

    // Get sent data.
    var user = req.body.post;
    idCount++;

    // Do a MySQL query.
    var query = mysql.format('INSERT INTO account VALUES ("' + idCount + '", ?, "test", "test", 19, "test", CURRENT_TIMESTAMP)', user);

    //var test = mysql.format('INSERT INTO account (id, first_name) SET ?, ?', user, user);

    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
        }

        //console.log('The reponse is: ', user);
    });

    var str = urlGetUser + " (POST) " + "just called " + req.body;
    //console.log(JSON.parse(user));
    console.log(user);
    res.send({ express: str });
});

var urlGetUser = "/api/trait";   // <-- Notice SINGULAR verb
app.post(urlGetUser, function (req, res) {
    var sqlString = "SELECT * FROM traits";
    connection.query(sqlString,
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }

            console.log('The reponse is: ', rows);
        });

    console.log(req.body.first_name);
    console.log(req.body.post);
});

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
