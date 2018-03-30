//single mysql connection object. blocking in the sense that I cannot create another without the handshake error.

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'webuser',
  password : 'rhiannon5115',
  database : 'skyrhi'
});

module.exports = {connection:connection};