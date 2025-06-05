// Write a function that parses a query string back into a JavaScript object.
let str =
  "?name=Neha&age=25&address%5Bcity%5D=New%20York&address%5Bzip%5D=10001&hobbies[0]=Reading&hobbies[1]=Traveling";
const converter = (str) => {
  const result = {};
  str = str.slice(1);
  arr = str.split("&");
  console.log(arr);
  arr.forEach((item) => {
    const [key, value] = item.split("=");
    const decodeKey = decodeURIComponent(key);
    const decodeValue = decodeURIComponent(value);
    if (decodeKey.includes("[")) {
      const outerKey = decodeKey.slice(0, decodeKey.indexOf("["));
      const innerKey = decodeKey.slice(decodeKey.indexOf("[") + 1, decodeKey.indexOf("]"));
      if (!result[outerKey]) {
        result[outerKey] = isNaN(innerKey) ? {} : [];
      }
      result[outerKey][isNaN(innerKey) ? innerKey : Number(innerKey)] =
        decodeValue;
    } else {
      result[decodeKey] = decodeValue;
    }
  });
  return result;
};
console.log(converter(str));
