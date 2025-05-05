//comparing two arrays are same or not.

const areEqualArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curr, index) => curr === arr2[index]);// do shallow check
};
console.log(areEqualArray([1,2,[3,4]],[1,2,[3,4]])); //false
console.log(areEqualArray([1,2,3],[1,2,4]));//false