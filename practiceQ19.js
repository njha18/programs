//input [1,2,2,3,1,4,2]
//output{'1':2,'2':3,'3':1,'4':1}

const countElement = (arr) => {
  let count;
  count = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return count;
};
console.log(countElement([1, 2, 2, 3, 1, 4, 2]));
