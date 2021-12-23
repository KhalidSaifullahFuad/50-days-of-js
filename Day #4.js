// Write a function which can convert the time input given in 12 hours format to 24 hours format.
/*
* The check for 'AM' and 'PM' can be verified using endsWith String method
* An extra 0 would be needed if the hours have single digit
*/

// Solution
function  convertTo24HrsFormat(time) {
    let timeArr = time.split(':');
    let hours = timeArr[0];
    let minutes = timeArr[1].substring(0,2);
    let amPm = timeArr[1].substring(2);
    
    if (hours === '12' && amPm === 'AM') {
        hours = '00';
    } else if (amPm === 'PM' && hours !== '12') {
        hours = parseInt(hours) + 12;
    }
    
    return `${hours}:${minutes}`;
}

// Test Cases
console.log(convertTo24HrsFormat("12:10AM")); // returns "00:10"
console.log(convertTo24HrsFormat("5:00AM")); // returns "05:00"
console.log(convertTo24HrsFormat("12:33PM")); // returns "12:33"
console.log(convertTo24HrsFormat("01:59PM")); // returns "13:59"
console.log(convertTo24HrsFormat("11:8PM")); // returns "23:08"
console.log(convertTo24HrsFormat("10:02PM")); // returns "22:02"