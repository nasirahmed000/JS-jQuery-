// javascript string practice


const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('valid');
}
else{
    console.log('invalid');
}
