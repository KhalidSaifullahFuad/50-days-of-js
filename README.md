<h1 align='center'>50 Days of JavaScript!</h1>

This 50 Days of JavaScript challenge was created by [Mehul Mohan](https://youtube.com/codedamn) founder of [codedamn](https://codedamn.com/). So I will take an approach to complete this challenge.


## Day 1
**Problem:** Function which returns a random number in the given range.

**Description:**  Create a function which returns a random number in the given range of values both inclusive.

**Solutions:** 
```
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    return new Date().getTime() % rangeEnd + rangeStart;
}
```


## Day 2

**Problem:** Write a program to reverse a string

**Description:** 
* String can be reversed by iterating it and storing it in reverse order
* String can also be reversed by converting it to array, then joining it after reversing 

**Solutions:** 
```
function reverseAString(str) {
    return str.split('').reverse().join('');
}
```
