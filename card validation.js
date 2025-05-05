//credit card validation

const validateCreditCard=(str)=>{
    str=str.replace(/\D/g,"")//remove spaces from digits
    console.log(str)
//reverse the string
let revStr=""
for(i=str.length-1;i>=0;i--){
    revStr+=str[i]
}
//double every second digit
revStr=revStr.split("");
let currDigit=revStr.map((item,index)=>{
if(index%2!==0){
    item=item*2
    //if no is greater than 9 sbtract by 9
    if(item>9){
        item= item-9;
    }
}
return item;
})
//sum all digits
currDigit=currDigit.reduce((acc,curr)=>{
    return acc+Number(curr)
},0)
console.log(currDigit)
//modules of 10
return currDigit%10===0;

}
console.log(validateCreditCard("4539 1488 0343 6467"))
console.log(validateCreditCard("8273 1232 7352 0569"))