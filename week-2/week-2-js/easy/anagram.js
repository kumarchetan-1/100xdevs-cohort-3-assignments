/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const normalisedString1 = str1.replace(/\s+/g, "").toLowerCase()
  const normalisedString2 = str2.replace(/\s+/g, "").toLowerCase()
 if (normalisedString1.length !== normalisedString2.length) {
  return false
 } else {
  const sortedString1 = normalisedString1.split("").sort().join("")
  const sortedString2 = normalisedString2.split("").sort().join("")
  console.log(sortedString1,  " ", sortedString2)
  if (sortedString1 === sortedString2) {
    return true
  } else {
    return false
  }
 }
}



// Without using inbuilt string and array methods

function splitShortJoin(str) {
  const arr = []
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") arr.push(char)
  }
  // console.log(arr)

  // Bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1] 
        arr[j+1] = temp
      }
    }
  }
    let stringified = ""
    for (let i = 0; i < arr.length; i++) {
      stringified += arr[i];
    }
    return stringified
}
function isAnagram2(str1, str2) {
  const normalisedString1 = str1.replace(/\s+/g, "").toLowerCase()
  const normalisedString2 = str2.replace(/\s+/g, "").toLowerCase()

  const sortedString1 = splitShortJoin(normalisedString1)
  const sortedString2 = splitShortJoin(normalisedString2)
  if (sortedString1 === sortedString2) {
    return true
  } else {
    return false
  }
}

const isItAnagram1 = isAnagram("dormatory ", "darty   room")
console.log(isItAnagram1)
const isItAnagram2 = isAnagram2("dormatory ", "darty   room")
console.log(isItAnagram2)

module.exports = isAnagram;
