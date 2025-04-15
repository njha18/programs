//fizzbuzz challenge no divisble by 3 only print fizz , 3&5 fizz buzz, only 5 buzz , else return no.

const fizzbuzz = (start, end) => {
  let arr = [];
  for (i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz");
    }
    else if(i % 3 === 0 ){
      arr.push("fizz");
    }
    else if(i % 5 === 0){
        arr.push("buzz");
    }
    else {
        arr.push(i)
    }
  }
  return arr;
};
console.log(fizzbuzz(1, 15));
