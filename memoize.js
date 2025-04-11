function myMemoize(func,context){
    const res={};
    return function(...args){
        var argsCache=JSON.stringify(args)
        if(!res[argsCache]){
            res[argsCache]=func.call(context||this,...args)
        }
        return res[argsCache]
    }
}


const clumsyProduct=(num1,num2)=>{
    for(i=0;i<10000;i++){}
    return num1*num2
}
const memoizeClumsyProduct=myMemoize(clumsyProduct)
console.time("firstcall");
console.log(memoizeClumsyProduct(10,5));
console.timeEnd("firstcall");

console.time("secondcall");
console.log(memoizeClumsyProduct(10,57));
console.timeEnd("secondcall");




const myMemoize = (func) => {
    const res = {};  // Cache to store results
    return (...args) => {
        const argsCache = JSON.stringify(args);  // Create a cache key based on arguments
        if (!res[argsCache]) {
            res[argsCache] = func(...args);  // Compute and store the result if not cached
        }
        return res[argsCache];  // Return the cached result
    };
};

const clumsyProduct = (num1, num2) => {
    for (let i = 0; i < 10000; i++) {}  // Simulate a slow operation
    return num1 * num2;
};

const memoizeClumsyProduct = myMemoize(clumsyProduct);

console.time("firstcall");
console.log(memoizeClumsyProduct(10, 5));  // Should compute and store the result
console.timeEnd("firstcall");

console.time("secondcall");
console.log(memoizeClumsyProduct(10, 57));  // Should compute and store the result
console.timeEnd("secondcall");

console.time("thirdcall");
console.log(memoizeClumsyProduct(10, 5));  // Should return the cached result
console.timeEnd("thirdcall");
