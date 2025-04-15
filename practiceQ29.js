//function which converts objects to array and then obj
const conversion=(obj)=>{
let entries=Object.entries(obj)
console.log(entries.flat());
let newobj=Object.fromEntries(entries)
return newobj;
}
console.log(conversion({
    name:"neha",
    profession:"developer"
}))