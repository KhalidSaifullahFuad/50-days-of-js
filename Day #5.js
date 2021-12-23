// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
/*
* indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively.
* If the match is not found, these methods return -1.
*/

// Test Cases
console.log(getTheGapX('XeroX')); // returns 4
console.log(getTheGapX('Xamarin')); // returns 0
console.log(getTheGapX('JavaScript')); //returns -1
console.log(getTheGapX("F(X) !== G(X) !== F(X)")); // returns 18