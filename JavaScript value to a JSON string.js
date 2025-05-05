//Create a function that converts a JavaScript value to a JSON string.
// const conversion = (obj) => {
//     try {
//         if (typeof obj === 'function'|| obj ===undefined) {
//             console.log('Cannot stringify a function');
//             return;
//         }
//         obj = JSON.stringify(obj);
//         console.log(obj);  // This will now work for non-function values
//     } catch (error) {
//         console.log(error);
//     }
// };

// const obj =undefined
// conversion(obj);  // Outputs: Cannot stringify a function
// - Implement a function that converts a JSON string back into a JavaScript value.
const conversionValue = (jsonStrings) => {
    try {
        const obj = JSON.parse(jsonStrings);  // Attempt to parse the JSON string
        console.log(obj);  // If successful, print the object
    } catch (error) {
        console.log("Invalid JSON string:", error.message);  // If parsing fails, print an error message
    }
};

const jsonStrings = '"neha"';  // Valid JSON string
const jsonStrings1 = '{"name":"neha"}';  // A valid JSON object
conversionValue(jsonStrings1);  // Outputs: { name: 'neha' }

conversionValue(jsonStrings);  // Outputs: { name: 'neha' }
const jsonStrings2 = '["neha"]';  // A valid JSON array
conversionValue(jsonStrings2);  // Outputs: [ 'neha' ]

// // Test with an invalid JSON string:
// const invalidJson = '{"name": "neha"';  // Missing closing bracket
// conversionValue(invalidJson);  // Outputs: Invalid JSON string: Unexpected end of JSON input







