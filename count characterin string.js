//input("neehaaaa","a")
//output-4
//handle both lower and uppercase character

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();
  word = word.split("");
  console.log(word)
 totalCount= word.reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);
  return totalCount
};
console.log(countChar("neehaaaa","e"));
