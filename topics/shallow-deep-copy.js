
let counts = [1,2,3];
let nums= counts;

nums.forEach((e , i)=>{
  nums[i] = e+=1;
})
console.log(nums , counts) ;
