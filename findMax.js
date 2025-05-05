//find max from the array
//in case of numbers
const findMax=()=>{
    return Math.max(2,4,99,100,890);
}
console.log(findMax());
//incase of array
const findMaxArr=(arr)=>{
//   return Math.max.apply(null,arr)
return Math.max(...arr)
}
console.log(findMaxArr([2,4,99,100,890]));