// 存在blog路由相关内容  
const {SuccessModle,ErrorModle}  = require('../modle/resModle');
const { getList,getDetail} =require('../controller/getBlog');
function handleBlogRouter(req,res){
    const method = req.method;
   // 请求博客列表
   if(method=='GET' && req.path=='/api/blog/list'){
       // 向数据库获取博客信息  sql  id 
      let {author,keyword}=req.query;
      let dataList=getList(author,keyword);
     return  dataList.then(function(data){
        if(data.length !=0){
          return  new SuccessModle(data,'获取博客列表成功');
        }else{
          return new ErrorModle('获取失败');
        }
      });
      
   } 
   // 获取博客详情
   if(method=='GET' && req.path=='/api/blog/detail'){
     // 向数据库获取博客信息  sql
     // select * from bolg where id=X;
     let {id}= req.query;
     let blogDetail=getDetail(id);
     if(blogDetail){
       return new SuccessModle(blogDetail,'获取博客信息成功');
     }else{
      return  new ErrorModle('获取失败');
     }
    
   }
   
   // 新增一篇博客
   if(method=='POST' && req.path=='/api/blog/new'){
    // 向数据库获取博客信息  sql
     return {
       mes: '新增博客接口'
     }
   }

   // 更新一篇博客
   if(method=='POST' && req.path=='/api/blog/update'){
    // 向数据库获取博客信息  sql
     return {
       mes: '更新博客的接口'
     }
   }

   // 删除一篇博客
   if(method=='POST' && req.path=='/api/blog/del'){
    // 向数据库获取博客信息  sql
    console.log(req.body.id);
     return {
       mes: '删除博客的接口'
     }
   }

}

module.exports=handleBlogRouter







