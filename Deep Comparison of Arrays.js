//Deep Comparison of Arrays:

function deepEqual(arr1,arr2){
    if(typeof arr1==="object"&& arr1 !== null&&typeof arr2==="object"&&arr2!==null){
      if(Array.isArray(arr1)&& Array.isArray(arr2)){
        if(arr1.length!==arr2.length){
            return false;
        }
        for(let i=0;i<arr1.length;i++){
            if(!deepEqual(arr1[i],arr2[i])){
                return false
            }
        }
        return true;
      }
      let keys1=Object.keys(arr1)
      let keys2=Object.keys(arr2)
      if(keys1.length!==keys2.length){
return false
      }
      for(let key of keys1){
        if(!keys2.includes(key)||!deepEqual(arr1[key],arr2[key])){
return false
        }
      }
return true
    }
    return arr1===arr2;
}
//const deepCompare = (arr1, arr2) => {
  // Check if both inputs are arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  // Check length
  if (arr1.length !== arr2.length) return false;

  // Compare each element
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    // If both are arrays, compare deeply
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!deepCompare(val1, val2)) return false;
    }
    // If one is array and the other isn't
    else if (Array.isArray(val1) || Array.isArray(val2)) {
      return false;
    }
    // Compare primitive values
    else if (val1 !== val2) {
      return false;
  
    }
  }

  return true;
};
