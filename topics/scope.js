// what is scopes?

// ans:  Scope determines the accessibility (visibility) of variables.

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// Types of scopes in JS

// Global Scope
// Block Scope 
//Function scope



 

function one() {
  const username = "abhi";
  function two() {
    const web = "tk";
    console.log(username);
  }
//   console.log(web);
// output : web is undefined due to behaviour of block scope the variables declared in block is only accesiable inside the block
  two();
}

one();


// example of hoisting

addone(5);
function addone(num){
    console.log(num+1);
}

// addTwo(5);
const addTwo = (num)=>{
    console.log(num+2);
}


// variables decalred using var keyword in block scope are accesiable outside the block scope
// example
if(true){
    var a = "pp";
}

console.log(a);




// but in function scope var declare inside the scope is not accesiable outside the scope dosen't matter the keyword we use to declare the variable

// Variables defined inside a function are not accessible (visible) from outside the function.
// Variables declared with var, let and const are quite similar when declared inside a function.

// example




function three(){
    var x=1;
}
console.log(x);
three();

