//convert string to camelcase or snakecase
const toCamelCase=(str)=>{
let arr=str.split(" ");
arr= arr.map((item,index)=>{
    if(index===0){
        return item.toLowerCase()
                 }
   else{ 
    return item.charAt(0).toUpperCase()+item.slice(1)
       }
})
str=arr.join("");
return str;
}


console.log(toCamelCase("hello world thapa"));