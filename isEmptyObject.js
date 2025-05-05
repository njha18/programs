//check object emptiness

// const isEmptyObject=(obj)=>{
// for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//         return `it's not an empty`
//     }
// }
// return `it's an empty`

// }
const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

console.log(isEmptyObject({ name: "vinod" }));
console.log(isEmptyObject({}));
console.log(isEmptyObject({ keyWithNull: null }));
console.log(isEmptyObject({ keyWithUndefined: undefined }));
