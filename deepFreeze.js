// - Implement a function that deep freezes an object, preventing any changes.

function deepFreeze(obj) {
    // Freeze the object itself
    Object.freeze(obj);
  
    // Iterate over all properties of the object
    for (let key in obj) {
        // Only freeze properties that are objects and not already frozen
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] !== null && !Object.isFrozen(obj[key])) {
            deepFreeze(obj[key]); // Recursively deep freeze the nested object
        }
    }
    
    return obj;
}
