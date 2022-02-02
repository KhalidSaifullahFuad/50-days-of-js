// Return the N-th value of the Fibonacci sequence
/*
* Return the N-th value of the Fibonacci sequence
*/

// Solution
function fibonacci(n) {
    return (n<=1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}


// Test Cases
console.log(fibonacci(5)); // returns the N-th value of the Fibonacci sequence