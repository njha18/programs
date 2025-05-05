//password validation using regex expression

// const validatePassword=(password)=>{
//     let regex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/
//     return regex.test(password)
// }
// console.log(validatePassword("Pass123!"))

//validate indian mobile number
// const mobileNo=(str)=>{
//     let regex=/^[6-9][\d]{9}$/  
//     return regex.test(str)
// }validatePassword
// console.log(mobileNo("911234567"));

//extract number from the string
// const num=(str)=>{
//     let regex=/\d+/g;       
//     return str.match(regex);
// }
// console.log(num("abc123def456"))
//validate hex color
const validateHexColor=(str)=>{
    return /^#[A-Fa-f\d]{3}|[A-Fa-f\d]{6}$/.test(str) 
}
console.log(validateHexColor("#a23"));
// //validate Date
// const validateDate=(str)=>{
//     let regex=/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/
//     return regex.test(str)
// }
// console.log(validateDate("09/18/1999"))



