// Determine if a sentence is a pangram

/*
* Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is: The quick brown fox jumps over the lazy dog.

* The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.
*/

// Solution
function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letters = string.toLowerCase().split('');
  const missingLetters = alphabet.split('').filter(letter => !letters.includes(letter));
  return missingLetters.length === 0;
}

// Test Cases
console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // should return true
console.log(isPangram("This is not a pangram.")); // should return false