function fn1(a){
  let primose=new Promise(function(resolve,reject){
      if(a>10){
        resolve(a);
      }
  });
  return primose;
}

  fn1(12).then(function(data){
    return  data+10;
  }).then(function(data){
   return  console.log(data);
  }).then();

  // Promise1.then(function(data){
  //    console.log(data);
  // });

  // then 函数return时 有会创建一个新的promise对象