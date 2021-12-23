// Create a regular expression to validate if the given input is valid Indian mobile number or not
/*
* Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits.
* test method of regular expression can be used to validate if the mobile number pattern matches or not.
*/

// Solution
function validateMobile(number){
    return (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/).test(number);
}


// Test Cases
console.log(validateMobile('+919876543210')); // returns true
console.log(validateMobile('+91 9876543210')); // returns true
console.log(validateMobile('09876543210')); // returns true
console.log(validateMobile('9876543210')); // returns true
console.log(validateMobile('99876543210')); // returns false
