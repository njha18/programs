function isEven(num) {
    return num % 2 === 0;
  }
  
  // Example usage:
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false


  //oddd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // Example usage:
  console.log(isOdd(5)); // true
  console.log(isOdd(10)); // false
  
  //prime
  function isPrime(n){
    if (n <= 1) {
      console.log(`${n} is not a prime number`);
      return; // Return early if n is less than or equal to 1
  }
    let isPrimeNum=true;
    for(i=2;i<n;i++){
        if(n%i===0){
            isPrimeNum=false;
        }
    }
    if(isPrimeNum){
        console.log(`${n}is a prime number`)
    }
    else{
    console.log(`${n}is not a prime number`)

    }
}
isPrime(16)

  