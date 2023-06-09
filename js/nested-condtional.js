const num1 = 10;
const num2 = 5;

if (num1 > 4) {
  if (num2 > 3) {
    console.log("Both numbers are positive.");
  } else {
    console.log("The first number is positive but the second number is negative.");
  }
} else {
  console.log("The first number is not positive.");
}

const score = 85;

if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else if (score >= 60) {
  console.log("You got a D.");
} else {
  console.log("You got an F. Please try again.");
}
