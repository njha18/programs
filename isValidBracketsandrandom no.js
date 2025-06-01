
const isValidBrackets=(str)=>{
let arr=[];
for(let ch of str){
  if(ch==='('){
    arr.push(')')
  }
  else if(ch==='{'){
    arr.push('}')
  }
  else if(ch==='['){
    arr.push(']')
  }
  else{
    let last=arr.pop();
    if(ch!==last)return false;
  }
}
return arr.length===0;
}

console.log(isValidBrackets("({[]})")); // true
console.log(isValidBrackets("({[})"));  // false

//Explanation:

//We get the current milliseconds.

//We print 5 numbers with a small delay so the milliseconds change each time.

//This gives 5 numbers that look different.


function getSimpleRandom() {
  return new Date().getMilliseconds();
}

for (let i = 0; i < 5; i++) {
  // Wait a bit to get different milliseconds
  setTimeout(() => {
    console.log(getSimpleRandom());
  }, i * 50); // 50ms gap between each number
}

