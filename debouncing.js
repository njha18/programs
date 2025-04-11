let counter=0;
const getData=()=>{
    console.log("fetched")
}
const debouncing=function(func,d){
    let timer;
    return function(){
        let context=this;
        args=arguments
    if (timer)clearTimeout(timer);
    timer=setTimeout(()=>{
    func.apply(context,arguments)
    },d)
    }
}
const betterFunction=debouncing(getData,3000)
betterFunction();

//arrow function

let count = 0;

const getData = (city) => {
  console.log("fetched " + city + count++);
};

const debouncing = (func, d) => {
  let timer;  // Declare the timer variable in the outer scope

  return (...args) => {  // Arrow function to handle debouncing
    clearTimeout(timer);  // Clear the existing timeout before setting a new one
    timer = setTimeout(() => {  // Set a new timeout
      func(...args);  // Call the passed function with the arguments
    }, d);
  };
};

const betterFunction = debouncing(getData, 1000); // Debouncing with a delay of 1000ms
betterFunction("delhi");  // Pass the "delhi" city as an argument
