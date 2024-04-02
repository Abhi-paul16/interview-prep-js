const user = {
  user: "abhi",
  price: 12,
  welcomeMessage: function () {
    console.log(`${this.user} , welcome to web`);
    // console.log(this);
  },
};

// user.welcomeMessage()

// user.user = "sun"
// user.welcomeMessage()

// console.log(this);

// this refer to current context

// function chai(){
// let user= "ap"
//     console.log(this);
// }
// chai()

// const chai = function (){
//     let user = "ap";
//     console.log(this.ap);
//   };
  
//   chai()

// const chai = () => {
//   let user = "ap";
//   console.log(this);
// };

// chai()

// console.log(this);
// THIS : this keyword in js refers to the current excution context. it is a special variable that changes their
// value depending on how or where it is invoked.

