// promises provide us a better way of writing asychromous operation in javascript
// promises has three states prending , resolve , reject
// promises give us the failure or sucsses of asyn operations



let data = false
let promise = new Promise((resolve, reject)=>{
    if(data){
        resolve({sucess:true , data:[1,2,4]})
    }else{
        reject({sucess:false , data:[]})
    }
    // throw new Error('Network response was not ok'); syntax for throwing error through promises
})

promise.then((res)=>{
    console.log(res , 'response');
}).catch((err)=>{
    console.log(err , 'error');
})
// console.log(promise);




// promises allows us to chain mutiple async operations sequentialy

