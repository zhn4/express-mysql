var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'blog'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('connect success!')
  connection.query('create table post ( id int(11) not null auto_increment, title varchar(100) not null, content varchar(5000) not null, create_time timestamp not null, primary key(id) )', function(err) {
    if(err) throw err
    console.log('create table success')
    connection.end()
  })
})
