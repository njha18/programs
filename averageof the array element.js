//average of the array element

const avg=(arr)=>{
total=arr.reduce((acc,curr)=>{
return acc+curr
}
)
return total/arr.length
}
console.log(avg([1,2,3,4,5]))