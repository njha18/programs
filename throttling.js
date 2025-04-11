const expensive=()=>{
console.log("expensive")
};
window.addEventListener("resize",betterExpensive());
function throttling(func,d){
    let flag=true;
    return function(){
        let context=this;
        args=arguments;
        if(flag){
            func.apply(context,arguments);
            flag=false
        }
        setTimeout(()=>{
            flag=true
        },d)


    }
}
const betterExpensive=throttling(expensive,3000);