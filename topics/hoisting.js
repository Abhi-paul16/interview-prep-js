// Hoisiting is a javascript behavior in which a function or a variable can be used before its declaration


// Variable hoisting

// console.log(a); give reference error 
// let a = 10;

// console.log(a); // output : undefined
// var a= 10; 

 hoisting();

function hoisting(){
    console.log(" i am hoisted")
}





// var hoisted = function hoisting(){
//     console.log(" i am hoisted")
// }
// hoisted();


// when a function is used as an expression, an error occurs because only declarations are hoisted.