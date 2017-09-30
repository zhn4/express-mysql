var post = {
  insert: 'insert into post(id, title, content) value (0,?,?)',
  update: 'update post set title=?, content=? where id=?',
  delete: 'delete from post where id=?',
  queryById: 'select * from post where id=?',
  queryAll: 'select * from post'
}
