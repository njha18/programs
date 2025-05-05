//input("abc",5)
//output(abcabcabcabcabc)

const repeatString = (str, num) => {
  return num>0?str.repeat(num):str;
};
console.log(repeatString("abc", 0));
