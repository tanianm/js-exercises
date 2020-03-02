// Add comments to explain what this function does. You're meant to use Google!
function getNumber() {
    return Math.random() * 10;
}

getNumber();

// Add comments to explain what this function does. You're meant to use Google!
function s(w1, w2, w3) {
    return w1.concat(w2, w3);
}

s("I", "like", "pizza");


function concatenate(firstWord, secondWord, thirdWord) {
    // Write the body of this function to concatenate three words together
    // Look at the test case below to understand what to expect in return 
<<<<<<< Updated upstream
    return `${firstWord} ${secondWord} ${thirdWord}`;
}

console.log(concatenate('Code ', 'your ', 'future'))
console.log(concatenate('I ', 'like ', 'pizza'))
console.log(concatenate('I ', 'am ', 13))


   
=======

    return `${firstWord} ${secondWord} ${thirdWord}`;
}

concatenate("code", "your", "future");
concatenate("I", "like", "pizza");
concatenate("I", "am", 13);
>>>>>>> Stashed changes

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
  
test("concatenate function - case 1 works", concatenate('code', 'your', 'future') === "code your future")
test("concatenate function - case 2 works", concatenate('I', 'like', 'pizza') === "I like pizza")
test("concatenate function - case 3 works", concatenate('I', 'am', 13) === "I am 13")