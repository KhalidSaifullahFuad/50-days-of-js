// Function which returns a random number in the given range
/*
*  Create a function which returns a random number in the given range of values both inclusive
*/

// solution
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	return new Date().getTime()%rangeEnd+rangeStart;
}

// Test Cases 
console.log(randomNumberGeneratorInRange(10, 50)); // should return a number between 10-50 (inclusive)
console.log(randomNumberGeneratorInRange(100, 500)); // should return a number between 100-500 (inclusive)

