// Write a function to check if an object is empty or not in javaScript?
/*
* How to check if an object is empty or not in javaScript?
*/

// Solution
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
// Test Cases

console.log(isEmpty({})); // returns true
console.log(isEmpty({key: 1})); // returns false
