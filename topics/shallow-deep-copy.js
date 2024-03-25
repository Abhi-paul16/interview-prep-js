// There are two ways to clone an object in Javascript:

// Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.

let obj = {
    name:"abhi",
    professional_career:{
        company:'triazine'
    },
    age:"22"
}


// let levelOne = {...obj};

//  levelOne.name = "akku"

//  let levelTwo = {...obj};

//  levelTwo.professional_career.company = "astra";

//  console.log(obj, levelOne , levelTwo);


//  Deep copy: means that all levels of the object are copied. This is a true copy of the object.

let deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.age = "25";
deepCopy.professional_career.company = "google";

console.log(obj, deepCopy);