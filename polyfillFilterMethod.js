const num=[1,2,3,4]
Array.prototype.myFilter=function(cb){
    let temp=[];
    for(i=0;i<this.length;i++){
        if(cb(this[i],i,this))
        temp.push((this[i]))
    }
    return temp
}
const multiplyByTwo=num.myFilter(n=>n>3)
console.log(multiplyByTwo);
