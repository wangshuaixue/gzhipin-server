var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); //index就是index.ejs
});

/*
* 1.获取请求数据 通过req
* 2.处理数据
* 3.返回响应 通过res来返回数据
* */
router.post('/register',function (req,res) {
  //获取请求参数数据
  const {username,password}=req.body
  //处理数据,这里data和msg不要同时存在
  let result
  if(username==='admin'){
    result={code:1,msg:'此用户已存在'}
  }else{
    result={code:0,data:{id:'1',username,password}}
  }
  res.send(result)  //会在内部调用，看这个result是对象还是数组，对象的话，会调用res.json来返回json数据
})

router.post('/login',function (req,res) {
  const {username,password}=req.body
  //根据用户名和密码来查找对应的user
  
})

module.exports = router;
