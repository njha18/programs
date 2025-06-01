const student = [
  { name: "A", rollNo: 1 },
  { name: "B", rollNo: 2 },
  { name: "C", rollNo: 3 },
  { name: "D", rollNo: 4 },
  { name: "E", rollNo: 5 },
  { name: "F", rollNo: 6 },
  { name: "E", rollNo: 5 }, // duplicate of above
];

const result = student.filter((value, index, arr) => {
  const firstIndex = arr.findIndex((obj) => {
    return obj.name === value.name && obj.rollNo === value.rollNo;
  });
  return index === firstIndex;
});
