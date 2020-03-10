//处理http 请求和响应
const handleBlogRouter=require('./src/router/blog');
const handleUserRouter=require('./src/router/user');
const querystring= require('querystring');

function handleServer (req,res){
   res.setHeader('Content-type','application/json');
   const method=req.method;
   req.path= req.url.split('?')[0];  // /api/blog/list
   req.query=querystring.parse( req.url.split('?')[1] );  // { keyword:XXX,id:1}
    

   // 处理博客请求
   const blogData=handleBlogRouter(req,res);
   if(blogData){
      res.end(JSON.stringify(blogData));
      return;
   }

   // 处理用户（登陆，注册）
   const userDate=handleUserRouter(req,res);
   if(userDate){
      res.end( JSON.stringify(userDate) );
      return;
   }
  



}

module.exports = handleServer;


  



