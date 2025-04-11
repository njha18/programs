//remove anyduplictes from thr array

const removeDuplicates=(arr)=>{
let newArr=[...new Set(arr)]
// console.log(newArr)
return newArr
}
console.log(removeDuplicates([1,2,3,2,2,5,5,5,5,1,7]));