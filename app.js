//处理http 请求和响应
const handleBlogRouter=require('./src/router/blog');
const handleUserRouter=require('./src/router/user');
const querystring= require('querystring');
//  封装promise  获取 post 提交数据
function getPostDate(req){
	const method=req.method;
	const promise=new Promise(function(resolve,reject){
	if(method !=="POST"){
		resolve({});
		return;
	}
	// 客户端post发送数据的时候，只能发送json数据
	if(req.headers['content-type']!=='application/json'){
		resolve({});
		return;
	}
	var postData='';
	
	req.on('data',function(data){
	postData+=data;
	if(!postData){
		resolve({});
		return;
	}
	resolve(JSON.parse(postData));
	});
	
	});
	
	return promise;
}
function handleServer (req,res){
   res.setHeader('Content-type','application/json');
   const method=req.method;
   req.path= req.url.split('?')[0];  // /api/blog/list
   req.query=querystring.parse( req.url.split('?')[1] );  // { keyword:XXX,id:1}
    
   getPostDate(req).then(function(postData){
   	 
   	
   req.body=postData; 
   // 处理博客请求
   const blogData=handleBlogRouter(req,res);
   if(blogData){
      res.end(JSON.stringify(blogData));
      return;
   }

   // 处理用户（登陆，注册）
   const userDate=handleUserRouter(req,res);
   if(userDate){
      res.end(JSON.stringify(userDate) );
      return;
   }
  
  //不存在的接口
 res.writeHead('404',{'Content-type':'text/plain'});
 res.write('404 not found');
 res.end();

   });
 

}

module.exports = handleServer;


  



