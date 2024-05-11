let sum = 0;

const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memoize = ()=>{
    let cache = {};
    return function(...args){
        let n = args[0];
        console.log(cache)
        if(n in cache){
            return cache[n];
        }else{
            console.log('calling first time');
            let result =  calc(n)
            cache[n] = result;
            return result;
        }
    }
}
let efficientCalc = memoize();
console.time()
console.log(efficientCalc(9))
console.timeEnd()

console.time()
console.log(efficientCalc(9))
console.timeEnd()
 

 // Memoization is the optimizing technique  used for speed the function call by cahching their results.
 
 