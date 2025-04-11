//ispowerof2 return true or false
//input 8 output true(2**3===8)

const isPowerOfTwo=(num)=>{
let op=false
for(i=0;i<num;i++){
    if(2**i===num){
     op=true
    }
}
return op
}
console.log(isPowerOfTwo(9));