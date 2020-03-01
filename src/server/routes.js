/*import { connection } from './server.js'

const mysql = require('mysql');

module.exports = function(app) {
    app.get('/', function(req, res) {
        connection.query('SELECT * FROM account', function(err, data) {
            (err)?res.send(err):res.json({users: data});
        });
        //res.send("why am i doing this");
    });
};

*/
