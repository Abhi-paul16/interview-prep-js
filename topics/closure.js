// Lexical scope = acc to lexical scope the inner function of js have acess to the outer
// function variables.

// function outer (){
//     let count = 1;
//     function inner(){
//         console.log(count);
//     }
//     inner();
// }


// outer()

// closures = closure is a fundamental concept of javascript 
// due to closures the inner function have acess of out function variables even after the execution
// of outer scope.


function outer (){
    let count = 1;
    function inner(){
        console.log(count);
    }
    return inner;
}


// Question's on Closure's

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // Output = 1
//   }
//   console.log(count); // Output = 0
// })();


// function createBase(x){
//     function inner(y){
//         console.log(x+y)
//     }
    
//     return inner;
// }


// var addSix = createBase(6);
// addSix(10);// returns 16
// addSix(21);// returns 27


//How do you optimise time using closures?

// function find(index) {
//     let a = [];
//   for (let i = 0; i < 1000000; i++) { a[i]= i*i }
    
//     return function(index){
//   console.log(a[index])
        
//     }
// }

// const closure = find()
// console.time("6");
// closure(6); // this takes 37ms
// console.timeEnd("6");
// console.time("12");
// closure(12); // this takes 135ms
// console.timeEnd("12");


// for (var i = 0; i < 3; i++) {
    
//     function closure(i){
//          setTimeout(function log() {
//     console.log(i); // What is logged? =3,3,3
//   }, 1000);
//     }
    
//     closure(i)
 
// }


// let view
// function likeTheVideo(){
//     view="Roadside Coder"
//     let called = 0;


    
//     return function(){
//     called++;
//         if(called<=1){
//     console.log( "Subscribe to", view)
         
//     } 
//     }
// }

// let check = likeTheVideo();


// check()
// check()
// check()
// check()
// check()


const memoSqaure = ()=>{ 
    const res = {};
    return function(...args){
        let argsCache = JSON.stringify(args);
        let revargsCache =JSON.stringify(args.reverse());
        if(!res[argsCache] && !res[revargsCache]){
            res[argsCache] = clumsysquare(args[0] , args[1])
        }
        console.log(res)
        return res[argsCache];
    }
}
const clumsysquare =(num1,num2) => {
  for (let i = 1; i <= 100000000; i++) {}
  return num1 * num2;

};

let optimizeClumSquare = memoSqaure()

console.time();
console.log(optimizeClumSquare(1500,2500)) 
console.timeEnd()

console.time();
console.log(optimizeClumSquare(2500,1500))
console.timeEnd()

 


 let output = outer();
console.log(output)
 output();
