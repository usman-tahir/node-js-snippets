
describe ("Calculator", function() {
  var Calculator = require("../js/Calculator");

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be able to add two numbers", function() {
    expect(calculator.add(1, 1)).toEqual(2);
  });

  it("should be able to subtract two numbers", function() {
    expect(calculator.subtract(1, 1)).toEqual(0);
  });

  it("should be able to multiply two numbers", function() {
    expect(calculator.multiply(1, 1)).toEqual(1);
    // expect(calculator.multiply(2, 0.5)).toEqual(1);
  });

  it("should be able to divide two numbers", function() {
    expect(calculator.divide(4, 2)).toEqual(2);
    expect(calculator.divide(0, 2)).toEqual(0);
  });

  it("should return a division error message when dividing by zero", function() {
    expect(calculator.divide(1, 0)).toEqual("Cannot divide by zero.");
  });

  it("should return NaN for non-number inputs", function() {

    // Addition
    expect(calculator.add(1, "hello")).toEqual(NaN);
    expect(calculator.add("hello", "world")).toEqual(NaN);

    // Subtraction
    expect(calculator.subtract(1, "hello")).toEqual(NaN);
    expect(calculator.subtract("hello", "world")).toEqual(NaN);

    // Multiplication
    expect(calculator.multiply(1, "hello")).toEqual(NaN);
    expect(calculator.multiply("hello", "world")).toEqual(NaN);

    // Division
    expect(calculator.divide(1, "hello")).toEqual(NaN);
    expect(calculator.divide("hello", "world")).toEqual(NaN);
  });
})
