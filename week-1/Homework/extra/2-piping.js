/*
  PIPING FUNCTIONS
  ================
  1. Write 3 functions:
  - one that adds 2 numbers together
  - one that multiplies 2 numbers together
  - one that formats a number so it's returned as a string with a £ sign before it (e.g. 20 -> £20)

  2. Using the variable startingValue as input, perform the following operations using your functions all
  on one line (assign the result to the variable badCode):
  - add 10 to startingValue
  - multiply the result by 2
  - format it
  
  3. Write a more readable version of what you wrote in step 2 under the BETTER PRACTICE comment. Assign
  the final result to the variable goodCode
*/

function add(a, b) {
  let sum = a + b;
  return sum;
}

add(1,3)

function add(a, b) {
  let sum = a + b;
  return sum;
}

add(2.4, 5.3).toFixed(1);

function multiply(x, y) {
  let answer = x * y;
  return answer;
} 

multiply(2, 3);


function format(num) {
  let total = "£" + num;
  return total;
}

format(16);


// Why can this code be seen as bad practice? Comment your answer.

// let badCode = function () {const startingValue = 2; let result = "£" + ((startingValue + 10) * 2); return result};
// - add 10 to startingValue
//   - multiply the result by 2
//     - format it

const startingValue = 2;
let badCode = format(multiply(add(10, startingValue), 2));

//console.log("The result of bad code is " + badCode);

/* BETTER PRACTICE */

let goodCode = function() {
  const startingValue = 2;
  let result = multiply(add(10, startingValue), 2); 
    return result;
}

//console.log("The result of good code is " + goodCode());


/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, expr) {
  let status;
  if (expr) {
      status = "PASSED"
  } else {
      status = "FAILED"
  }

  console.log(`${test_name}: ${status}`)
}

test('add function - case 1 works', add(1,3) === 4)
test('add function - case 2 works', add(2.4,5.3) === 7.7)
test('multiply function works', multiply(2,3) === 6)
test('format function works', format(16) === "£16")
test('badCode variable correctly assigned', badCode === "£24")
test('goodCode variable correctly assigned', goodCode === "£24")