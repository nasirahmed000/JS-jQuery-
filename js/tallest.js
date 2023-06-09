let arr = [5, 10, 2, 8, 3];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("The maximum number in the array is: " + max);


// using function
function findMaxNumber(arr) {
    let max = arr[0]; // initialize max with the first element of the array
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) { // compare the current element with the current max value
        max = arr[i]; // update max if the current element is greater
      }
    }
  
    return max;
  }
  
  // Example usage
  const number = [10, 5, 20, 15, 30];
  const maxNumber = findMaxNumber(number);
  console.log(maxNumber); // Output: 30

//   now eg of lowest 
function findLowestNumber(arr) {
    let lowest = arr[0]; // initialize lowest with the first element of the array
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < lowest) { // compare the current element with the current lowest value
        lowest = arr[i]; // update lowest if the current element is smaller
      }
    }
  
    return lowest;
  }
  
  // Example usage
  const numbers = [10, 5, 20, 15, 30];
  const lowestNumber = findLowestNumber(numbers);
  console.log(lowestNumber); // Output: 5
  


  