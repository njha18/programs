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