var express = require('express');
// var post = require('../config/post');
var connection = require('../config/db.js')
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;

module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Express blog'
    })
  })

  // index
  app.get('/posts', function(req, res, next) {
    // var post
    connection.query('select * from post', function(err, results) {
      if(err) {
        posts = []
      }
      res.render('posts', {
        title: '文章列表',
        posts: results
      })
    })
  })

  // create
  app.post('/posts', function(req, res, next) {
    connection.query('insert into post (title, content) values (?, ?)', [req.body.title, req.body.content], function(err, results) {
      if(err) throw err
      if(typeof results === 'undefined') {
        res.json({
          code: 0,
          msg: '操作失败'
        })
      }else {
        res.json({
          code: 1,
          msg: '操作成功'
        })
      }
    })
  })

  app.get('/post/:id', function(req, res, next) {
    connection.query('select * from post where id=?', [req.params.id], function(err, results) {
      if(err) throw err
      res.render('post_details', {
        post: results[0]
      })
    })
  })

  // new
  app.get('/posts/new', function(req, res, next) {
    res.render('posts_new')
  })

  app.get('/post/edit/:id', function(req, res, next) {
    connection.query('select * from post where id=?', [req.params.id], function(err, results) {
      if(err) throw err
      res.render('post_edit', {
        post: results[0]
      })
    })
  })

  app.post('/post/edit/:id', function(req, res, next) {
    connection.query('update post set title=?, content=? where id=?', [req.body.title, req.body.content, req.params.id], function(err, results) {
      if(err) throw err
      // res.json({
      //   code: 1,
      //   msg: '修改成功'
      // })
      res.redirect('/posts');
    })
  })

}
