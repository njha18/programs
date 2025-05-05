function PromisePollyfill(executor) {
    let onResolve = null;
    let onReject = null;
    let isFulfilled = false;
    let isRejected = false;
    let isCalled = false;
    let value;

    function resolve(val) {
        if (isFulfilled || isRejected) return; // prevent multiple calls
        isFulfilled = true;
        value = val;
        if (typeof onResolve === "function" && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
    }

    function reject(val) {
        if (isFulfilled || isRejected) return;
        isRejected = true;
        value = val;
        if (typeof onReject === "function" && !isCalled) {
            isCalled = true;
            onReject(value);
        }
    }

    this.then = function (callback) {
        onResolve = callback;
        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this; // support chaining
    };

    this.catch = function (callback) {
        onReject = callback;
        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    };

    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}


const examplePromise = new PromisePollyfill((resolve, reject) => {
    // 
    resolve(2)
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