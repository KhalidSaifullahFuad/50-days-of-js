<h1 align='center'>50 Days of JavaScript!</h1>

Level up your JavaScript skills with a daily coding challenge in 50 days. This 50 Days of JavaScript challenge was created by [Mehul Mohan](https://youtube.com/codedamn) founder of [codedamn](https://codedamn.com/).

------------------------------------

## Day 1

**Problem:** Function which returns a random number in the given range.

**Description:**  Create a function which returns a random number in the given range of values both inclusive.

**Solutions:**

```#! JavaScript
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return new Date().getTime() % rangeEnd + rangeStart;
}
```

------------------------------------

## Day 2

**Problem:** Write a program to reverse a string

**Description:**

* String can be reversed by iterating it and storing it in reverse order
* String can also be reversed by converting it to array, then joining it after reversing

**Solutions:**

```#! JavaScript
function reverseAString(str) {
    return str.split('').reverse().join('');
}
```

------------------------------------

## Day 3

**Problem:** Write a program to reverse a string

**Description:**

* String can be reversed by iterating it and storing it in reverse order
* String can also be reversed by converting it to array, then joining it after reversing.


**Solutions:**

```#! JavaScript
function reverseAString(str) {
    return str.split('').reverse().join('');
}
```

------------------------------------

## Day 4

**Problem:** Write a function which can convert the time input given in 12 hours format to 24 hours format.

**Description:**

* The check for 'AM' and 'PM' can be verified using endsWith String method
* An extra 0 would be needed if the hours have single digit

```#! JavaScript
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
```
