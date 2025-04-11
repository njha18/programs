//count vowels in string.

const countVowels=(str)=>{
let count=0;
let vowels=['a','e','i','o','u']
str=str.toLowerCase();
for(i in str){
    if(vowels.includes(str[i])){
        count+=1
    }
}
return count

}
console.log(countVowels("eeatify eegha"));