//Q. write a function that takes a string as input and returns the longest word in the string.if there are multiple longest words return the first word encountered.if the input string is empty or contains only whitespaces, the function should return a false.the function should ignore leading and trailing white spaces when determining the longest word.

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  strArr = str.split(" ");
  // strArr=strArr.sort((a,b)=>b.length-a.length);
  // return strArr[0]}

  //using reduce method
  return strArr.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc;
  }, "");
};
console.log(findLongestWord("my shubhamjklllklll name is  swaroop"));
