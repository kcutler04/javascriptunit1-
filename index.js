//variables
let amount;
let amount1;
let amount5;
let amount10;


//user input 
amount=parseFloat(prompt ("Please enter your starting balance."));



//processing
amount1 = amount * 1.05;
amount5 = amount * 1.05**5;
amount10 = amount * 1.05**10;






//output
console.log("Your starting balance is " + amount.toFixed(2));
console.log("After 1 year, your account will contain " +amount1.toFixed(2));
console.log("After 5 years, your accoutn will contain "+amount5.toFixed(2));
console.log("After 10 years, your account will contain "+ amount10.toFixed(2));





