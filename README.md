<h1 align='center'>50 Days of JavaScript!</h1>

[](https://codedamn.com/)
This my solution for the challenge. Join in this [challenge](https://codedamn.com/50-days-of-js), and boost up your JavaScript knowledge.

------------------------------------

### Day 1

**Problem:** Function which returns a random number in the given range.

**Description:**  Create a function which returns a random number in the given range of values both inclusive.

**Solution:**

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

**Solution:**

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


**Solution:**

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

**Solution:**

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

------------------------------------

## Day 5

**Problem:** Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'.

**Description:**

* indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively.
* If the match is not found, these methods return -1.

**Solution:**

```#! JavaScript
function getTheGapX(str) {
    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');
    if (firstIndex == -1 || lastIndex == -1) {
        return -1;
    }
    return lastIndex - firstIndex;
}
```

------------------------------------

## Day 6

**Problem:** Write a function to truncate a string to a certain number of words.

**Description:**

* Truncate a string to a certain number of words

**Solution:**

```#! JavaScript
function truncateWithWordLimit(str, wordLimit) {
    return str.split(" ").slice(0, wordLimit).join(" ");
}   
```
