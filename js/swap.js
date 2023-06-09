let num1 = 20;
let num2 = 25;

const temp = num1;
num1 =num2;
num2=temp;
console.log(num1,num2);


// approach 2

[num1, num2]=[num2,num1];
console.log(num1,num2);