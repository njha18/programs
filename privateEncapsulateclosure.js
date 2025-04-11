function Closure(){
    let count=0;
    this.increment=function(){
        count++;
        console.log(count)
    }
    this.decrement=function(){
        count--;
       console.log(count)
    }
    
    }

let a=new Closure();
a.increment();
a.increment();
