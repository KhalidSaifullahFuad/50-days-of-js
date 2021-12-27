// Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
/*
* indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively.
* If the match is not found, these methods return -1.
*/
/*
Test Cases:
* getTheGapX('XeroX') returns 4
* getTheGapX('Xamarin') returns 0
* getTheGapX('JavaScript') returns -1
* getTheGapX("F(X) !== G(X) !== F(X)") returns 18
*/

// Solution
function getTheGapX(str) {
    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');
    if (firstIndex === -1 || lastIndex === -1) {
        return -1;
    }
    return lastIndex - firstIndex;
}

// Test Cases
console.log(getTheGapX('XeroX')); // returns 4
console.log(getTheGapX('Xamarin')); // returns 0
console.log(getTheGapX('JavaScript')); //returns -1
console.log(getTheGapX("F(X) !== G(X) !== F(X)")); // returns 18
