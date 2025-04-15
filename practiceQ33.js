//an array containing consecutive number from a to b.

// const numberRange=(startIndex,endIndex)=>{
// let arr=[];
// for(i=startIndex;i<=endIndex;i++){
//     arr.push(i)
// }
// return arr;
// }
// console.log(numberRange(-2,2))

//using recursion
const numberRangeRecursive = (a, b, arr = []) => {
  if (a <= b) {
    arr.push(a);
    return numberRangeRecursive(a + 1, b, arr);
  }
  return arr;
};
console.log(numberRangeRecursive(0, 5));
