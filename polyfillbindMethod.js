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
Function.prototype.mybind = function (...args) {
  const context = args[0];
  const func = this;
  return function (...arg) {
    func.apply(context, [...args.slice(1), ...arg]);
  };
};
const a = printName.mybind(obj2);
a("delhi");
