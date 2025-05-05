//mode
//input [1,2,2,3,1,4,2]
//output{'1':2,'2':3,'3':1,'4':1} mode=3(highest value)

const countElement = (arr) => {
  let count;
  let max = 0;
  let mode;
  count = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  console.log(count)
  for (key in count) {
    if (count[key] > max) {
      max = count[key];
      mode = key;

    }
  }
  return mode;
};
console.log(countElement([1, 2, 2, 3, 1, 4, 2]));
