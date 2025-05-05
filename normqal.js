const obj1 = {
  name: 'Alice',
  address: {
    city: 'Wonderland',
    zip: 12345
  },
  age: 30
};
const obj2 = {
  age: 30,
  name: 'Alice',
  address: {
    zip: 12345,
    city: 'Wonderland'
  }}
function deepEqual(obj1,obj2){
  if(typeof obj1!="object"||typeof obj2!=="object"||obj1==="null"||obj2==="null"){
    return obj1===obj2;
  }
  obj1Keys=Object.keys(obj1)
  obj2Keys=Object.keys(obj2)
  if(obj1Keys.length!==obj2Keys.length){
    return false;
  }
  for(let key in obj1){
    if(!obj2Keys.includes(key)||!deepEqual(obj1[key],obj2[key]) ){
      return false
    }
  }
  return true;
}