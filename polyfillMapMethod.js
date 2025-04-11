const num=[1,2,3,4]
Array.prototype.myMap=function(cb){
    let temp=[];
    for(i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}
const multiplyByTwo=num.myMap(n=>n*3)
console.log(multiplyByTwo);
