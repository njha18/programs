const obj1 = {
    firstName: "neha",
    lastName: "jha",
  };
  const obj2 = {
    firstName: "shubham",
    lastName: "swaroop",
  };
  function printName(city) {
    console.log(this.firstName + this.lastName + city);
  }
  Function.prototype.myApply = function (context={},args=[]) {
      if(typeof(this)!=="function"){
          throw new Error(this+"this isnot callable")
      }
      if(!Array.isArray(args)){
          throw new Error("CreateListFromArrayLike called on non objects")
      }
    context.fn = this;
    context.fn(...args)
  };
  const a = printName.myApply(obj2,["delhi"]);
  
  