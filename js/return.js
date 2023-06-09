function add (number1,number2){
    console.log(number1,number2);
    var sum = number1+number2;
    console.log(sum);
}

add(12,20);



function add (number1,number2){
    console.log(number1,number2);
    var sum = number1+number2;
    // console.log(sum);
    return sum;
    
}


var total = add (80,100);
console.log('total',total);
