// Write a function which accepts two valid dates and returns the difference between them as number of days
/*
* The difference between 2 dates in JavaScript will give the time difference in milliseconds.
* Time difference can be converted in to days by dividing the 24Hrs time in milliseconds
*/

// Solution
function getDaysBetweenDates(date1, date2) {
    return Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / (1000 * 3600 * 24);
}

// Test Cases
console.log(getDaysBetweenDates('11/01/2020', '11/05/2020')); // returns 4
console.log(getDaysBetweenDates('11/10/2021', '11/12/2021')); // returns 2
console.log(getDaysBetweenDates('10/15/2020', '12/1/2020')); // returns 47
