let mysql         = require('mysql');
let connection    = mysql.createConnection({
  host        : 'localhost',
  user        : 'root',
  password    : '',
  database    : 'faqdb'
});

connection.connect();

module.exports = connection