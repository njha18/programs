const obj1 = {
    firstName: "neha",
    lastName: "jha",
  };
  
  const obj2 = {
    firstName: "shubham",
    lastName: "swaroop",
  };
  
  function printName(city) {
    console.log(this.firstName + " " + this.lastName + " " + city);
  }
  
  Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
      throw new Error(this + " is not callable");
    }
    context.fn = this;  // Assign the current function to context.fn
    context.fn(...args); // Call the function with the provided arguments
  };
  
  const a = printName.myCall(obj2, "delhi");
  