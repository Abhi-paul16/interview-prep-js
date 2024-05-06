const User = {
    username:"abhishek",
    loginCount:0,
    signedIn:false,
    getUserDetails: function (){
        console.log(`user name is ${this.username}`);
    }
}


 // let understan new keyword

 const user = (username , age , isActive)=>{
        this.username = username;
        this.age = age;
        this.isActive= isActive;
        return this;
 }

//  const userOne = user("abhishek" , 22 , true);
//  const userTwo = user("Pal" , 21 , true);
//  console.log(userOne) the out will be the data of userTwo because we are not using new keyword while creating a
// new user due to which values are updating on old instance . new  keyword creates new instance for a variable.

//  const userOne = new user("abhishek" , 22 , true);
//  const userTwo = new user("Pal" , 21 , true);

// now both variables have d/f values.

// constructor function

