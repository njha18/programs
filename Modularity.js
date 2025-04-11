const Module=(function(){
    function privateMethod(){
        console.log("private")
    };
   return {
       publicMethod:function(){
        console.log("public");
       },
       privateMethod:privateMethod ,
    };
}
)();
Module.publicMethod();
Module.privateMethod();
//using arrow method-
const module=(function(){
    const privateMethod=()=>{
        console.log("private")
    } ;
    return{
        publicMethod:()=>{
            console.log("public")
        },
        private:privateMethod
    }
  })();
  module.publicMethod();
  module.private();
//second example
function counter(){
    let _counter=0;
    function add(increment){
        _counter+=increment;
    }
    function retrieve(){
        return _counter;
    }
    return{
        add,retrieve
    }
}
const c=counter();
c.add(6);
c.add(10);
console.log(c.retrieve());