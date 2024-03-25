// we will cover callbacks , promises , async-await in this file.

let data = [
  { name: "abhishek", salary: "40000" },
  { name: "anil", salary: "40000" },
  { name: "akanksha", salary: "40000" },
];

function getData() {
  setTimeout(() => {
    console.log(data);
  }, 1000);
}

let newObj = { name: "akash", salary: "70000" };
// function createData() {
//   setTimeout(() => {
//     data.push(newObj);
//   }, 2000);
// }

//  getData();
//  createData();

// now we can solve the above problem statement using  callback function

// function createData(callback) {
//   setTimeout(() => {
//     data.push(newObj);
//     callback() // called after the execution of another function
//   }, 2000);
// }
// createData(getData); // passed as a argumnet

// callback functions are the functions

// Promises

function createData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newObj);
      let error = false;
      if (error) {
        resolve();
      } else {
        reject("error is coming...");
      }
    }, 2000);
  });
}

 
createData().then(getData).catch(err=>console.log(err));

// promise chaining

// let data = new Promise ((resolve,reject)=>{
//   resolve("data found")
// })


// let fetchData = data.then((data)=>{
//   console.log(data)
//   new Promise ((resolve, reject)=>{
//   resolve("data fetched")        
//   })

// })


// console.log(fetchData)