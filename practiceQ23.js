//truncateString

const truncateString = (str, num) => {
  return num <= 0 ? str : str.slice(0, num) + "...";
};
console.log(truncateString("A-tiscate a-tasket A green and yellow basket", 8));
