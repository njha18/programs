function curr(a){
    return function(b){
        if(b){
           return curr(a+b)
        }
        return a;
    }

}
curr(2)(5)(6)();


const curr = (a) => (b) => {
    if (b) {
        return curr(a + b);
    }
    return a;
};

console.log(curr(2)(5)(6)()); // Outputs: 13
