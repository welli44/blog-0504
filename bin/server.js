// 创建一个服务器,配置服务器先关信息 
const http=require('http');
const handleServer=require('../app');

http.createServer(handleServer).listen(8081);

// 模块化开发: 一个模块干一类事