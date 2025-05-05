//write a fn. to check if a character is upperCase or a LowerCase.

const isUpperCase=(char)=>{
if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
    return true;
}
return false;
}
console.log(isUpperCase('a'));

//return char===char.toUpperCase();