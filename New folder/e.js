document.querySelector("#grandParent").addEventListener("click", (e) => {
  console.log("grandParentClicked");
  e.stopPropagation();
},true);
document.querySelector("#parent").addEventListener("click", (e) => {
  console.log("ParentClicked");
  
},false);
document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child clicked");
},false);
