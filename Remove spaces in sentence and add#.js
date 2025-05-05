// input-"my name is thapa technical"
//output-#MyNameIsThapaTechnical
 

const generateHash=(str)=>{
if(str.length>280||str.trim().length===0){
    return false;
}
str=str.split(" ");
// str=str.map(item=>item.replace(item[0],item[0].toUpperCase()));
str=str.map(item=>item.charAt(0).toUpperCase()+item.slice(1))
console.log(str);
str="#"+str.join("");
return str;
}
console.log(generateHash("my name is thapa technical"));