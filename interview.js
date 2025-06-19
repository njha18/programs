function MakeCounter(initialValue = 0) {
    let count = initialValue
    // Your implementation
    return {
         increment : function () {
        return ++count;
        },
    decrement :function () {
        return count=count-1
    },
    reset :function () {
        count=initialValue
        return initialValue;
    }
    }
   
    
}
const counter = MakeCounter(5);
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.decrement())


module.exports = MakeCounter;