//sum of squares [2,4,3]
//output 29


const sumOfSquares=(arr)=>{
const a=arr.map(item=>item*item).reduce((acc,curr)=>{
    return acc+curr
    },0)
    return a
}
console.log(sumOfSquares([2,3,4]));