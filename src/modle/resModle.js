// es6 Class 

class  baseModle {
    constructor(data,message){
       if(typeof data == 'string'){
           this.message=data;
           data=null;
           message=null;
       }
       if(data){
           this.data=data;
       }if(message){
           this.message=message;
       }
    }
}


class SuccessModle extends baseModle {
    constructor (data,message){
       super(data,message); // 执行父级的构造函数
       this.error=0;
    }
}

class ErrorModle extends baseModle {
    constructor (data,message){
       super(data,message); // 执行父级的构造函数
       this.error=1;
    }
}

module.exports={
    SuccessModle,
    ErrorModle
}

// 继承 



// {
//     mes:'XXXX',
//     data:[{...},{}],
//     error:1
// }
