//input("neehaaaa","a")
//output-4
//handle both lower and uppercase character


const countChar=(substr,char)=>{
substr=substr.split("");
return substr.reduce((acc,curr)=>{
    if(curr.includes(char)){
        acc+=1
    }
    return acc;
},0)
}
console.log(countChar("neehaaaa","a"));
