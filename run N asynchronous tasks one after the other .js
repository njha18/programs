//- Write a function to run N asynchronous tasks one after the other in series.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved Promise1");
    }, 1000);
  });
  const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved Promise2");
      }, 2000);
    });

async function handlePromise(){
    const value=await p1;
    console.log("hello world")
    const val2=await p2;
    console.log("hi nanny")
    return [value,val2]
}
const result=handlePromise()
.then((value)=>{
console.log(value)
})
.catch((err)=>{
    console.log(err)
})