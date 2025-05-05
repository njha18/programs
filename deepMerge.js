//
function deepMerge(obj1,obj2){
const result={...obj1}
for(let key in obj2){
    if(typeof obj2[key]==="object"&& obj2[key]!==null&&result[key]==="object"&&result[key]!==null){
        result[key] = deepMerge(result[key], obj2[key]); // Recursively merge objects

    }
    else {
        result[key] = obj2[key]; // Otherwise, just copy the value from obj2
    }
}
return result;
}
const obj1 = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: 12345
    },
    age: 25
};

const obj2 = {
    name: "Bob",
    address: {
        city: "New Wonderland",
        country: "Wonderlandia"
    },
    profession: "Explorer"
};