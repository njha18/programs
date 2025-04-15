//calculate simple interest

const simpleInterest=(p,r,t)=>{
let interest;
interest=(p*r*t)/100;
return interest;
}
console.log(simpleInterest(10,3,10))