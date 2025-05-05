//Create a function to execute N asynchronous tasks concurrently.
//Develop the functionality of Promise.any.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved Promise1");
    }, 1000);
  });
  const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved Promise2");
      }, 2000);
    });
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resolved Promise3");
      }, 3000);
    });
  const result=Promise.race([p1,p2,p3])
  .then((value)=>{
  console.log(value)
  })
  .catch((err)=>{
      console.log(err)
  })
  