function PromisePollyfill(executor) {
    let onResolve, onReject, isFulfilled = false, isRejected = false, value;

    function resolve(val) {
        isFulfilled = true;
        value = val;
        if (typeof onResolve == "function") {
            onResolve(val);
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;
        if (typeof onReject == "function") {
            onReject(value);
        }
    }

    this.then = function(callback) {
        onResolve = callback;
        if (isFulfilled&& !isCalled){
            // If already fulfilled, immediately call the callback
            onResolve(value);
        }
        return this;
    };

    this.catch = function(callback) {
        onReject = callback;
        if (isRejected && !isCalled) {
            // If already rejected, immediately call the callback
            onReject(value);
        }
        return this;
    };

    try {
        executor(resolve, reject); // Executes the provided executor function
    } catch (err) {
        reject(err);  // Rejects the promise if an error occurs in the executor
    }
}

const examplePromise = new PromisePollyfill((resolve, reject) => {
    setTimeout(() => {
        reject(2); // Resolves the promise with value 2 after 1 second
    }, 1000);
});

examplePromise
    .then((res) => {
        console.log(res); // Logs 2 after 1 second
    })
    .catch((err) => {
        console.log(err); // Would handle any error that occurs
    });

    PromisePollyfill.resolve=(val)=>{
        return new PromisePollyfill(function executor(resolve,reject){
            resolve(val)
        })
    }