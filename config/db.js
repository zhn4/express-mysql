// var mysql = require('mysql')
//
// module.exports = {
//   mysql: {
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'blog'
//   }
// }

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
});

module.exports = connection
