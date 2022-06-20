//Write a program to reverse a string
/* 
* String can be reversed by iterating it and storing it in reverse order
* String can also be reversed by converting it to array, then joining it after reversing 
*/

// Solution
function reverseAString(str) {
    return str.split('').reverse().join('');
}

// Test Cases
console.log(reverseAString("JavaScript is awesome")); // should return "emosewa si tpircSavaJ"
console.log(reverseAString("Peter Parker is Spiderman")); // should return "namredipS si rekraP reteP"
console.log(reverseAString("codedamn")); // should return "nmadedoc"
