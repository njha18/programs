//write a piece of code to compare two objects and return if they are equal.objects can be nested infinitely and thier key values can be in any order in js
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
        if(typeof obj1!=="object"||typeof obj2!=="object"||obj1===null||obj2===null){
            return obj1===obj2;
        }
        const keys1=Object.keys(obj1);
        const keys2=Object.keys(obj2);

        if(keys1.length!==keys2.length){
            return false;
        }
        for(let key of keys1){
            if(!keys2.includes(key)||!deepEqual(obj1[key],obj2[key])){
                return false;
            }
        }
        return true;
    }
    console.log(deepEqual(obj1,obj2))