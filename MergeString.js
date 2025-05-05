
function mergeString(str1,str2){
    let result="";
    let maxLength=Math.max(str1.length,str2.length)
    for(i=0;i<maxLength;i++){
        if(i<str1.length){
            result+=str1[i]
        }
        if(i<str2.length){
            result+=str2[i]
        }
    }
    return result;
}
str2="123"
str1="abcdef"
console.log(mergeString(str1,str2));