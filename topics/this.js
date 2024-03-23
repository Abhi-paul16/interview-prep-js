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
//     console.log(this.ap);
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
