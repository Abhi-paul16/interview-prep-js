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


 let output = outer();

 output();