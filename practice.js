const arr = [1, 3, 3, 3, 4, 4, 7];

const result=arr.reduce((acc,curr)=>{
acc[curr]=(acc[curr]??0)+1
return acc
},{})
console.log(result);
const sorted=[...new Set(arr)].sort((a,b)=>{
  return  result[b]-result[a]
})
console.log(sorted)