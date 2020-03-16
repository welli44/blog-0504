let MySQL_CONFIG;
if(process.env.NODE_ENV=='dev'){
    MySQL_CONFIG={
        host     : 'localhost',
        user     : 'root',
        password : '123456789',
        database : 'blog1',
        port:'3306'
      }
}
// if(process.env.NODE_ENV=='product'){
//     MySQL_CONFIG={
//         host     : 'localhost',
//         user     : 'root',
//         password : '123456789',
//         database : 'blog1',
//         port:'3306'
//       } 
// }
module.exports= MySQL_CONFIG;