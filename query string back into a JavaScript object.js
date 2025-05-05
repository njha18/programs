// Write a function that parses a query string back into a JavaScript object.
let str="?name=Neha&age=25&address%5Bcity%5D=New%20York&address%5Bzip%5D=10001&hobbies[0]=Reading&hobbies[1]=Traveling"
const converter=(str)=>{
    str=str.slice(1)
    let arr=str.split("&")
    let result={}
    arr.forEach(pair=>{
       const[key,value] =pair.split("=")
       const decodedKey = decodeURIComponent(key);
       const decodedValue = decodeURIComponent(value);
    result[decodedKey]=decodedValue;
    })
    return result

}

console.log(converter(str));