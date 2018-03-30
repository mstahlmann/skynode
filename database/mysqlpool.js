//mysql pool conncetion. Allow app to make simultaneous requests to the mysql database
//with connection pooling. Eliminated the handshale error.

var mysql      = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 10 ,//default = 10
  host     : 'localhost',
  user     : 'webuser',
  password : 'rhiannon5115',
  database : 'skyrhi'
});

module.exports = {pool:pool};