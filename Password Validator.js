//Password Validator

const passwordValidator=(password)=>{
let hasUpperCase=false;
let hasLowerCase=false;
let hasNumber=false;
for(let char of password){
    if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        hasUpperCase=true;   
    }
    else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
        hasLowerCase=true;   
    }
    else if(!isNaN(Number(char))){
        hasNumber=true;
    }
}
if(!hasUpperCase||!hasLowerCase||!hasNumber||password.length<8){
return false;
}
return true;
}

console.log(passwordValidator("afkdsfadsf"))
console.log(passwordValidator("afkdsfadsf1"))
console.log(passwordValidator("afkdsfadsf1A"))