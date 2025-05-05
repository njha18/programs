const objectToQueryString = (obj, prefix = "") => {
  let result = [];

  // Loop through all properties of the object
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Prepare the encoded key (prefix handles nested keys)
      let encodedKey = encodeURIComponent(prefix ? `${prefix}[${key}]` : key);

      // Handle arrays separately by iterating over the array elements
      if (Array.isArray(obj[key])) {
        obj[key].forEach((item, index) => {
          result.push(`${encodedKey}[${index}]=${encodeURIComponent(item)}`);
        });
      } 
      // If the value is an object, recurse into it
      else if (typeof obj[key] === "object" && obj[key] !== null) {
        result = result.concat(objectToQueryString(obj[key], encodedKey));
      } 
      // Otherwise, it's a primitive value
      else {
        let encodedValue = encodeURIComponent(obj[key]);
        result.push(`${encodedKey}=${encodedValue}`);
      }
    }
  }

  // Return the final query string, do not add ? here
  return result.length > 0 ? result.join("&") : "";
};

// Example object with nested objects and arrays
const obj2 = {
  name: "Neha",
  age: 25,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["Reading", "Traveling"],
};

// Output the final query string by prepending '?' only once at the end
console.log("Final Query String:", "?" + objectToQueryString(obj2));


// console.log(objectToQueryString(obj));
// console.log(objectToQueryString(obj2));
//const queryString = new URLSearchParams(params).toString();
//console.log(queryString);
// Output: name=John&age=30&city=New+York
