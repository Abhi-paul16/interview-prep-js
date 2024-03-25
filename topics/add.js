// Rest and Spread Operator
// rest
// rest operator allows functions to access undefined number of arguments as an array within a function.
function add(a, b, c, ...other) {
    //   console.log(other);
    return a + b + c;
}
