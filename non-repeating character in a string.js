//Find the first non-repeating character in a string. Return the character or null if none exists.
// Example:
// Input: "aabbcdeff"
// Output: "c"

const Counter = (str) => {
  const arr = str.split("");
 const obj= arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  for(let key in obj){
    if(obj[key]===1){
      return key
    }
   
  }
  return null;

};
console.log(Counter("aabbcdeff"));
