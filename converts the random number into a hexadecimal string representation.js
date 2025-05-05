//converts the random number into a hexadecimal string representation.
const randomHexColor=()=>{
    return `#${Math.random().toString(16).slice(2,8)}`
}
console.log(randomHexColor());
