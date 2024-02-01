// Two types of data types are availabel
// Primitve and non-primitve
// Primitve data types (pre defined data tpyes)

// Number
// String
// Boolean
// Null
// undefined

// Non-primitve data types (defined by programmer)

// Object
// Arrays



// Two types of memory Stack & Heap

// Stack memory is used for storing primitive data types
// while stack memory comes in use we will get the copy of the original value.

let username = "abhishek"; // Primitive type variable stored in stack memory
let updatedname = username; // Copy of the variable is assigned to the new variable
updatedname = "pal"; // No link between the two variables, so 'username' remains "abhishek"
console.log(username); // Output: abhishek
console.log(updatedname); // Output: pal


// Heap memory is used for storing non-primitive data types
// while stack memory comes in use we will get the reference of the original value .

let userOne = {
    name: "abhi",
    mail: "abhi@mail.com"
}; // Reference to the object is stored in heap memory

let userTwo = userOne; // Reference stored in heap memory is assigned to 'userTwo'

userTwo.name = "abhishek"; // Modifying 'userTwo' also affects 'userOne'

console.log(userOne); // Output: { name: "abhishek", mail: "abhi@mail.com" }
