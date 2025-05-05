//calculate age from birth date
const calculateAge=(birthDate)=>{
    let todayDate=new Date();
    birthDate=new Date(birthDate);
    let age=todayDate.getFullYear()-birthDate.getFullYear();
    let monthDiff=todayDate.getMonth()-birthDate.getMonth();
    if(monthDiff<0 || monthDiff===0 && todayDate.getDate()<birthDate.getDate()){
        return --age;
    }
return age
}
console.log(calculateAge("1997-08-18"))