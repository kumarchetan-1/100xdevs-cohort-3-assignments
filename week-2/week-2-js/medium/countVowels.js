/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const normalisedStr = str.replace(/\s+/g, "").toLowerCase()
  const strChars = normalisedStr.split("")
  let noOfVowels = 0
  const vowels = ["a", "e", "i", "o", "u"]
  strChars.forEach(char => {
    if (vowels.includes(char)) {
      noOfVowels++
      console.log(char)
    }
  });
  return noOfVowels
}

const noOfVowels = countVowels("predomInant")
console.log(noOfVowels)

module.exports = countVowels;