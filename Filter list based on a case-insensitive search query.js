//Q2: Filter list based on a case-insensitive search query.
// const items = ["Apple", "banana", "Grape", "Mango", "orange"];

// filterItems(items, "an"); 
// Expected Output: ["banana", "Mango", "orange"]

const items = ["Apple", "banana", "Grape", "Mango", "orange"];

const filterItems=(items,query)=>{

   return items.filter((item)=>{
   return item.toLowerCase().includes(query.toLowerCase())
   }) 
}
console.log(filterItems(items, "an"));