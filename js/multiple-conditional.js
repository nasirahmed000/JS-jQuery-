const num = 10;

if (num > 0 && num % 2 === 0) {
  console.log("The number is positive and even.");
} else if (num > 0 && num % 2 !== 0) {
  console.log("The number is positive and odd.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
