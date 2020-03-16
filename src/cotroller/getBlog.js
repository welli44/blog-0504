// 获取博客列表
const query_sql=require('../db/mysql');
function getList(author,keyword){

   let sql= `select * from list where 2=2 `;
   if(author){
       sql+=`and username=${author} `;
   }
   if(keyword){
       sql+= `and title like '%${keyword}%' `
   }
   sql+= `order by id desc`
  return query_sql(sql)  
}
// 获取博客详情
function getDetail(id){
   // sql='select content from blog where id=id'
   if(id=='1'){
    return {
        id:'1',
        title:'标题1',
        content:'详情内容XXXXXXXXXXXXX',
        time:'2353425345'
       }
   }else{
       return false;
   }
}

module.exports={
    getList,
    getDetail
}