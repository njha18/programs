const student = [
  { name: 'A', rollNo: 1 },
  { name: 'B', rollNo: 2 },
  { name: 'C', rollNo: 3 },
  { name: 'D', rollNo: 4 },
  { name: 'E', rollNo: 5 },
  { name: 'F', rollNo: 6 },
];
const result=student.reduce((acc,curr)=>{
(curr.rollNo%2===0?acc[0]:acc[1]).push(curr)
return acc;
},[[],[]])
console.log(result[0])
console.log(result[1])
