//fn. to check if the given string starts with a specific subsstring

const startsWith=(str,substr)=>{
// return str.startsWith(substr)
return str.slice(0,substr.length)===substr
}
console.log(startsWith("hello World","hello"));