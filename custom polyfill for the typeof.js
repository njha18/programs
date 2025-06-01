// Write a custom polyfill for the typeof operator that returns the correct type of a JavaScript value.
const customTypeof=(value)=>{
    if(value===null){
        return "null"
    }
    if(value===undefined){
        return "undefined";
    }
    if(typeof value==="function"){
        return "function";
    }
    if(Array.isArray(value)){
        return "array"
    }
    return typeof value;
}
// console.log(customTypeof("hello"));        // "string"
// console.log(customTypeof(42));             // "number"
// console.log(customTypeof(true));           // "boolean"
// console.log(customTypeof(undefined));      // "undefined"
// console.log(customTypeof({ a: 1 }));       // "object"
console.log(customTypeof(null));           // "null"
// console.log(customTypeof([1, 2, 3]));      // "array"
// console.log(customTypeof(() => {}));       // "function"