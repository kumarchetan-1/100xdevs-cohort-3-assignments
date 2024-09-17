/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    const lengthOfArr = numbers.length
    // for (let i = 0; i < lengthOfArr; i++) {
    //     for (let j = 0; j < lengthOfArr-i-1; j++) {
    //         if (numbers[j]>numbers[j+1]) {
    //             let temp = numbers[j]
    //             numbers[j] = numbers[j+1]
    //             numbers[j+1] = temp
    //         }
    //     }  
    // }
    const sorted = numbers.sort()
    return numbers[lengthOfArr-1]
}

console.log(findLargestElement([3, 7, 2, 9, 1]));


module.exports = findLargestElement;