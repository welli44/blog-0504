# 数据库

## 数据库下载 
   下载地址：https://dev.mysql.com/downloads/mysql/
   数据库安装：注意设置密码
   数据库可视化管理工具：不需要使用控制台操作数据库
  使用 navicat、 phpmyadmin、 phpstudy 操作简便

## nodejs链接数据库

>下载数据库模块  npm install mysql --save

代码演示
```
 const mysql=require('mysql');
 // 链接数据库
 var db=mysql.createConnection({
     host:'localhost',
     user:'root',
     port:'3306',
     password:'123456789',
     database:'user_table'
 });
 db.connect();
 const sql='select * from user;';
 db.query(sql,function(err,data){
     console.log(data);  
 });
 db.end();

```
---
## SQL语句
> SQL语句用于操作数据库 可对数据库进行增删改查
#### sql语句书写规范
- 关键字用大写
- 数据库名、表名、字段名用 `反引号 
- 值用 引号 ''
### 向数据库增加一条数据
> INSERT INTO 表名  (字段列表) VALUES (值列表) 

代码演示
```
 INSERT  INTO `user_table` (`ID`,`username`,`password`) VALUES (0,'duanli','123');
 //注意 id为主键,值设置为0，则表示自增  在增加一条数据时候，可以不设置id默认表示自增 如：
 INSERT INOT `user_table` (`username`,`password`) VALUES ('duanli','123')
```
### 向数据库查询数据
> SELECT * FROM `表名` 
> SELECT * FROM `表名` WHERE `username`='zhangsan' or 'password=123'  // 条件筛选
> SELECT * FROM `表名` WHERE `username`='zhangsan' order by id desc;  // 排序 （倒序）

代码演示
```
  SELECT * FROM `user_table`;    // 查询表中所有字段  一般避免使用*号，用什么字段查询对应字段
  SELECT `id`,`user` FROM `user_table`;   //查询表中部分字段
  SELECT * FROM `表名` WHERE `username`='zhangsan' and `password`='123';   // 多个条件筛选
  SELECT * FROM `表名` WHERE `username`='zhangsan' or `password`='123';   // 或
  SELECT * FROM `表名` WHERE `username` like '%zhang%';     // like  模糊查询  查询值中含有zhang的数据
```
### 数据库数据更新 
> UPDATE 表名 SET 字段=value WHERE 条件

代码演示
```
UPDATE `user` SET `relname`='zhangsan' WHERE `username='张三'`;
```

### 数据库删除数据
> DELETE FROM 表名  WHERE  条件
```
delete from user  where username='lisi'

注意：一般真的应用、不会用delete删除数据，可以在每一行加一个字段state  赋值为1表示可用   赋值为0 表示不可用

update user set state='0' where  username='lisi'  // 将state设置为0
select  * from user where  state=1;  // 再查询时，不会查找到lisi  ---- 软删除：其好处是数据可以恢复

select  * from user where  state<>1  // state 不等于0
```








