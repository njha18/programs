//calculate mean

// const calculateMean = (arr) => {
//   if (arr.length === 0) return 0;
//   const total = arr.reduce((acc, curr) => {
//     return acc + curr;
//   },0);
//   return total / arr.length;
// };
// console.log(calculateMean([]));

const calculateMedian = (arr) => {
  console.log(arr.sort((a, b) => a - b));
  let length = arr.length;
  let mid = Math.floor(length / 2);
  if (length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
};
console.log(calculateMedian([5, 3, 9, 1, 7]));
console.log(calculateMedian([2, 4, 6, 8]));
console.log(calculateMedian([1, 3, 5, 7, 9, 11]));
