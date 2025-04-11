const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 3000)
);

function promiseAllPolyfill(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    // If the input is empty, resolve immediately with an empty array
    if (promises.length === 0) {
      return resolve(results);
    }

    promises.forEach((promise, index) => {
      // Ensure promise is an actual promise
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed += 1;

          // If all promises have resolved, resolve the main promise
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          // If any promise rejects, reject the main promise
          reject(error);
        });
    });
  });
}

promiseAllPolyfill([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: ['First', 'Second', 'Third']
  })
  .catch((error) => {
    console.log(error);
  });
