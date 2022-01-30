// Write a function to remove array element based on object property?
/*
* How to remove array element based on object property?
*/

// Solution
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

// Test Cases
console.log(removeArrayElement("money")); // returns the array without the money object
console.log(removeArrayElement("id")); // returns the array without the id object
console.log(removeArrayElement("cStatus")); // returns the array without the cStatus object