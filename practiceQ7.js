//comparing two arrays are same or not.

const areEqualArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curr, index) => curr === arr2[index]);
};
console.log(areEqualArray([1,2,3],[1,2,3]));
console.log(areEqualArray([1,2,3],[1,2,4]));