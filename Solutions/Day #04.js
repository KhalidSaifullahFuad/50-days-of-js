// Write a function which can convert the time input given in 12 hours format to 24 hours format.
/*
* The check for 'AM' and 'PM' can be verified using endsWith String method
* An extra 0 would be needed if the hours have single digit
*/

// Solution
function convertTo24HrsFormat(time) {
    const newTime = time.slice(0, time.length - 2).split(':');
    let hours = newTime[0];
    const minutes = newTime[1];
    const amPm = time.substr(time.length - 2);

    if (amPm === 'AM' && hours === '12') {
        hours = '00';
    } else if (amPm === 'PM' && hours !== '12') {
        hours = `${parseInt(hours) + 12}`;
    }

    return `${hours.padStart(2,'0')}:${minutes.padStart(2,'0')}`;
}

// Test Cases
console.log(convertTo24HrsFormat("12:10AM")); // returns "00:10"
console.log(convertTo24HrsFormat("5:00AM")); // returns "05:00"
console.log(convertTo24HrsFormat("12:33PM")); // returns "12:33"
console.log(convertTo24HrsFormat("01:59PM")); // returns "13:59"
console.log(convertTo24HrsFormat("11:8PM")); // returns "23:08"
console.log(convertTo24HrsFormat("10:02PM")); // returns "22:02"
