/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length == str2.length)
  {
      const splited1 = str1.split("");
      const splited2 = str2.split("");
      console.log(splited1 , splited2);
      const sorted1 = splited1.sort();
      const sorted2 = splited2.sort();
      console.log(sorted1,sorted2);
      const joined1 = sorted1.join("");
      const joined2 = sorted2.join("");
      console.log(joined1,joined2);
      if(joined1 == joined2)
      {
        console.log("Anagram");
      }
      else
      {
        console.log("It is not a Anagram");
      }
  }
  else{
    console.log("Error");
  }
}
module.exports = isAnagram;
