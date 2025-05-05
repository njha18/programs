//- Implement a function that caches identical API requests to avoid redundant calls.

function myMemoize(func, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args).catch((err) => {
        console.log(err);
      });
    }
    return res[argsCache];
  };
}

const clumsyProduct = async (num1, num2) => {
  // Simulating async operation (e.g., API call)
  const p=new Promise((resolve) =>
    setTimeout(() => {
        let res=num1 * num2
      resolve(res);
    }, 1000)
  );
  return p;
};
const memoizeClumsyProduct = myMemoize(clumsyProduct);
async function run(){
   const result= await memoizeClumsyProduct(10,20)
   console.log(result)
} 
run();
