//reverse the string without using built in methods

const reverseString=(str)=>{
let revStr=""
for(i=str.length-1;i>=0;i--){
revStr=revStr+str[i]
}
return revStr;
}
console.log(reverseString("hello"));