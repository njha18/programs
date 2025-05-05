//factorial

const isFactorial=(num)=>{
    let fact=1;
    for(i=1;i<=num;i++){
        fact *= i
    }
    return fact;
}
console.log(isFactorial(3));
console.log(isFactorial(5));
console.log(isFactorial(1));

//using recursion.
const factorial = (n) => {
    if (n <= 1) {
      return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
  };
  
  console.log(factorial(5));  // Output: 120
  

