// promise is class in js 
// constructor(FUNCTION)
  let mypromise = new Promise((fulfilled, notfullfilled) =>{
    let num1 =10;
    let num2=20;
    let sum = num1+num2;
    if(sum >20) {
        fulfilled(sum);
    }else{
        notfullfilled(new Error("promise not fullfilled"));
    }

 });

 //mypromise.then().catch().finally()
 mypromise.then(() =>{
    console.log("promise is fullfilled")

 }).catch(() => {
    console.log(" promise is not fullfilled")
 });



 function addTwoNumber(num1,num2){
    let sum=0;
    setTimeout(()=>{
        console.log(num1+num2); 
        sum=num1+num2;
    },5000)
    return sum;
    console.log("inside addTwoNumbers")
 }

 console.log(addTwoNumber(2,3));