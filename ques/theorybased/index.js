// dif between normal and arrow function.

function print() {
    console.log(arguments)
  }

  const hello = ()=>{
    console.log(arguments);
  }

  print('hii' , 1 , 'two')
  hello('lll' , "e" , 'e')