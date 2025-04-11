//input 1234
//output -10

const sumOfDigits=(num)=>{
let arr=Array.from(String(num),Number)
console.log(arr)
return arr.reduce((acc,curr)=>{
    return acc+curr
},0)
}
console.log(sumOfDigits(1234));