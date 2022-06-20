// Write a program to reverse a given integer number
/*
* The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0.
* A simple approach to reverse a number could also be to convert it in to a string and then reverse it.
*/

// Solution
function reverseGivenInteger(num) {    
    let reversed = 0;
    while (num != 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed;
}

// Test Cases
console.log(reverseGivenInteger(3849));// returns 9483
console.log(reverseGivenInteger(2222));// returns 2222
console.log(reverseGivenInteger(1002));// returns 2001
