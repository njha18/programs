// function isPalindromeString(str){
//     const len=str.length 
                               
//     for(i=0;i<len/2;i++){ 
//         if(str[i]!==str[len-i-1]){ 
//             return "not palindrome"
//         }
        
//     }
//     return "palindrome";
// }
// console.log(isPalindromeString("hello"));

//numbers
function isPalindromeNumber(num){
    let numString=num.toString();
    let reverseNum=numString.split("").reverse().join('');
    return numString===reverseNum;
}
console.log(isPalindromeNumber(1212))


function isPalindrome(str){
    let reverseString=""
    for(i=str.length-1;i>=0;i--){
        reverseString+=str[i]
    }
    if(reverseString===str){
        console.log("palindrome")
    }
    else{
        console.log("not palindrome")
    }
}
isPalindrome("madan")