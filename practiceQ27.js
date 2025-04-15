//removes duplicates from the array
 
const removeDuplicates=(arr)=>{
const newArr=[...new Set(arr)]
return newArr
}
console.log(removeDuplicates([1,2,2,2,2,4,5]))