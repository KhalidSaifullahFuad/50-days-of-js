//Write a function to truncate a string to a certain number of words
/*
* Truncate a string to a certain number of words
*/

// Solution
function truncateWithWordLimit(str, wordLimit) {
    return str.split(" ").slice(0, wordLimit).join(" ");
}   

// Test Cases
console.log(truncateWithWordLimit("JavaScript is simple", 3); // returns "JavaScript is simple"
console.log(truncateWithWordLimit("Codedamn is the best place to learn to code", 5)); // returns "Codedamn is the best place"
