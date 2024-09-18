/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0
  }

  add(num) {
    this.result += num;
    return this
  }

  subtract(num) {
    this.result -= num;
    return this
  }

  multiply(num) {
    this.result = this.result * num;
    return this
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    } else {
      this.result = this.result / num;
    }
    return this
  }

  clear(num) {
    this.result = 0;
    return this
  }

  getResult(num) {
    return this.result
  }

  calculate(str) {
    try {
      const normalisedExp = str.replace(/\s+/g, "")
      const validChars = "0123456789+-/*()."
      for (const char of normalisedExp) {
        if (!validChars.includes(char)) {
          throw new Error("Invalid characters in expression");
        }
      }
      this.result = eval(normalisedExp)
      if (!isFinite(this.result) || isNaN(this.result)) {
        throw new Error("Invalid Mathematical Expression");
      }
      console.log(this.result)

      return this.result
    } catch (error) {
      throw new Error(`Error in calculating the expression ${error.message}`);
    }
  }
}

const newExp = new Calculator()
newExp.calculate("(9 +  4 -2*5+3 )/10  ")
console.log(newExp)

module.exports = Calculator;
