<h1 align='center'>50 Days of JavaScript!</h1>

#### These are my solutions for this challenge. You can also join in this [challenge](https://codedamn.com/50-days-of-js), and boost up your JavaScript knowledge. 💪

<br>

## Day 1

**Problem:** Function which returns a random number in the given range.

**Description:**  Create a function which returns a random number in the given range of values both inclusive.

**Solution:**

```JavaScript
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return new Date().getTime() % rangeEnd + rangeStart;
}
```

<br>

## Day 2

**Problem:** Write a program to reverse a string

**Description:**

* String can be reversed by iterating it and storing it in reverse order
* String can also be reversed by converting it to array, then joining it after reversing

**Solution:**

```JavaScript
function reverseAString(str) {
    return str.split('').reverse().join('');
}
```

<br>

## Day 3

**Problem:** Write a program to reverse a string

**Description:**

* String can be reversed by iterating it and storing it in reverse order
* String can also be reversed by converting it to array, then joining it after reversing.


**Solution:**

```JavaScript
function reverseAString(str) {
    return str.split('').reverse().join('');
}
```

<br>

## Day 4

**Problem:** Write a function which can convert the time input given in 12 hours format to 24 hours format.

**Description:**

* The check for 'AM' and 'PM' can be verified using endsWith String method
* An extra 0 would be needed if the hours have single digit

**Solution:**

```JavaScript
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

<br>

## Day 5

**Problem:** Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'.

**Description:**

* indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively.
* If the match is not found, these methods return -1.

**Solution:**

```JavaScript
function getTheGapX(str) {
    const firstIndex = str.indexOf('X');
    const lastIndex = str.lastIndexOf('X');
    if (firstIndex == -1 || lastIndex == -1) {
        return -1;
    }
    return lastIndex - firstIndex;
}
```

<br>

## Day 6

**Problem:** Write a function to truncate a string to a certain number of words.

**Description:**

* Truncate a string to a certain number of words

**Solution:**

```JavaScript
function truncateWithWordLimit(str, wordLimit) {
    return str.split(" ").slice(0, wordLimit).join(" ");
}
```

<br>

## Day 7

**Problem:** Create a regular expression to validate if the given input is valid Indian mobile number or not.

**Description:**

* Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits.
* test method of regular expression can be used to validate if the mobile number pattern matches or not.

**Solution:**

```JavaScript
function validateMobile(mobileNumber) {
    return (/^(\+91|0)?\s?\d{10}$/).test(mobileNumber);
}
```

<br>

## Day 8

**Problem:** Write a function which accepts two valid dates and returns the difference between them as number of days.

**Description:**

* The difference between 2 dates in JavaScript will give the time difference in milliseconds.
* Time difference can be converted in to days by dividing the 24Hrs time in milliseconds.

**Solution:**

```JavaScript
function getDaysBetweenDates(date1, date2) {
    return Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / (1000 * 3600 * 24);
}
```

<br>

## Day 9

**Problem:** Write a function to check if an object is empty or not in javaScript.

**Description:**

* How to check if an object is empty or not in javaScript.

**Solution:**

```JavaScript
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
```

<br>

## Day 10

**Problem:** Write a function to remove array element based on object property.

**Description:**

* How to remove array element based on object property.

**Solution:**

```JavaScript
const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

function removeArrayElement(filterField) {
    return array.filter(function (element) {
        return element.field !== filterField;
    });
}
```

<br>

## Day 11

**Problem:** Return the N-th value of the Fibonacci sequence.

**Description:**

* Return the N-th value of the Fibonacci sequence

**Solution:**

```JavaScript
function fibonacci(n) {
    return (n<=1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
```
