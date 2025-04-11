const num=[1,2,3,4]

Array.prototype.myReduce=function(cb,initialValue){
    acc=initialValue;
    for(i=0;i<this.length;i++){
        acc=acc?cb(acc,this[i],i,this):this[i]
    };
    return acc;
}


const sum=num.myReduce((acc,curr)=>{
   return acc+curr 
},0)
console.log(sum)