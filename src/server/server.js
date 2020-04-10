const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3000;

// https://hashnode.com/post/how-can-use-react-js-node-js-mysql-together-cjdlfbukh01vqn9wuaucmng6h/

// initialize app
const app = express();

const connection = mysql.createConnection({
    //host: 'localhost',
    host: 'https://solotraveler.herokuapp.com/',
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

var urlGetHello = "/api/hello";
app.get(urlGetHello, (req, res) => {
    var str = urlGetHello + " (GET) " + "just called";
    console.log(str);
    res.send({ express: str });
});

/*---------------------------------------------------------------------------*/

//              CODE FOR SIGN INS

/*---------------------------------------------------------------------------*/

var urlGetLogin = "/api/login";   // <-- Being used in ValidatedLoginForm.js
app.post(urlGetLogin, function (req, res) {

    // Get sent data.
    var email = req.body.post;
    var pass_word = req.body.pass;

    console.log(pass_word);

    var sql = 'INSERT INTO account (email, pass_word, first_name, last_name, age, loggedin) VALUES (?)';
    var values = [email, pass_word, req.body.first_name, req.body.last_name, req.body.age, true];

    // Do a MySQL query for email.
    var query = mysql.format(sql, [values]);

    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
        }

    });

    var str = urlGetUser + " (POST) " + "just called " + JSON.stringify(req.body);
    console.log(email);
    res.send({ express: str });
});

var urlGetUser = "/api/getLogged";
app.get(urlGetUser, (req, res) => {
    var sqlString = "SELECT first_name FROM account";
    connection.query(sqlString,
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }

            console.log('The reponse is: ', rows);
            var jString = JSON.stringify(rows);

            res.send(JSON.parse(jString));
        });
});

/*---------------------------------------------------------------------------*/

//                  CODE FOR TRAITS

/*---------------------------------------------------------------------------*/

var urlGetUser = "/api/trait";
app.get(urlGetUser, (req, res) => {
    var sqlString = "SELECT * FROM traits";
    connection.query(sqlString,
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }

            console.log('The reponse is: ', rows);
            var jString = JSON.stringify(rows);

            res.send(JSON.parse(jString));
        });
});

/*---------------------------------------------------------------------------*/

//                  CODE FOR BLOGS

/*---------------------------------------------------------------------------*/

var urlGetBlog = "/api/blog";   // <-- Being used in blog.js
app.post(urlGetBlog, function (req, res) {

    // Get sent data.
    var blog = req.body.blogText;

    // figure out how to determine if someone is logged in

    // Do a MySQL query.
    var query = mysql.format('INSERT INTO blogs VALUES ("user", "name5", ?)', blog);

    //var test = mysql.format('INSERT INTO account (id, first_name) SET ?, ?', user, user);

    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
        }
    });

    var str = urlGetBlog + " (POST) " + "just called " + req.body;
    console.log(str);
    console.log(blog);
    res.send({ express: req.body.blogText });
});

var urlGetUser = "/api/allposts";
app.get(urlGetUser, (req, res) => {
    var sqlString = "SELECT * FROM blogs";
    connection.query(sqlString,
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }

            console.log('The reponse is: ', rows);
            var jString = JSON.stringify(rows);

            res.send(rows);
        });
});

/*---------------------------------------------------------------------------*/

//                  CODE FOR USERS

/*---------------------------------------------------------------------------*/

var urlGetUser = "/api/users";
app.get(urlGetUser, (req, res) => {
    var name = req.body.currentUser;
    var sqlString = "SELECT concat(first_name, '   +   ', email) FROM account";
    //var query = mysql.format(sqlString, name);
    connection.query(sqlString,
        function (err, rows, fields) {
            if (err) {
                console.log(err);
            }

            console.log('The reponse is: ', rows);
            var jString = JSON.stringify(rows);

            res.send(JSON.parse(jString));
        });
});

/*---------------------------------------------------------------------------*/

//                  CODE FOR SERVER

/*---------------------------------------------------------------------------*/

// start server
app.listen(PORT, () => {
    console.log('App running on port ' + PORT);
});
