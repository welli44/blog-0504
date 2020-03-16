// 开发的是 线上环境  开发环境
const MySQL_CONFIG=require('./config');
const mysql=require('mysql');

var connection = mysql.createConnection(MySQL_CONFIG);
  // 连接数据库 
  connection.connect();
   
  //执行sql
function query_sql(sql){
   let promise = new Promise(function(resolve,reject){
        connection.query(sql,function(err,result){
           if(err){
               reject(err);
           }else{
             resolve(result);  
           }
        });
   });
   return promise;
}

module.exports = query_sql;
