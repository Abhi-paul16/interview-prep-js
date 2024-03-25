const res = add(4, 5, 6, 5, 5, 10);
console.log(res);

// let nums = [1,2,3,4];
 
 


// spread

//The spread operator, denoted by three consecutive dots (...),
// Spread operator use for copying , pasting or  
// pass array elements to functions without explicity iterating through them.

let name = ["mukul" , "vivek" , "pathan" , "juhi"]

function getNames(name1,name2,name3 , name4){
    console.log(name1,name2,name3 , name4);
}


// getNames(...names)


let obj = {
    name:"abhishek pal",
    salary: "31500",
    desgination: "associate software developer"
}

let newObj = {
    ...obj,
    salary:'60000',
    desgination:"software developer"
}

// now in above example i used spread operator in object and copied the values of old obj to new one.

// console.log(newObj , obj)