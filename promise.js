const cart=["kurta","payjama","suit","salwar"];
CreateOrderId(cart)
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.then((value)=>{
    console.log(value)
})
.catch((err)=>console.log(err));
function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
    resolve("payment is successfull")
})
}
function CreateOrderId(cart){
    let orderId;
     let p =new Promise((resolve,reject)=>{
      if(validateCart()){
        orderId="123456";
        resolve(orderId);}
    else{
    reject("cart is not valid")}
})
return p;
         
     }
function validateCart(){
    return false;
}