
function Calculator() {
}

Calculator.prototype.isValidInput = function(input) {
  return (typeof(input) === "number");
}

Calculator.prototype.add = function(x, y) {
  if (this.isValidInput(x) && this.isValidInput(y)) {
    return x + y;
  } else {
    return NaN;
  }
}

Calculator.prototype.subtract = function(x, y) {
  if (this.isValidInput(x) && this.isValidInput(y)) {
    return x - y;
  } else {
    return NaN;
  }
}

Calculator.prototype.multiply = function(x, y) {
  if (this.isValidInput(x) && this.isValidInput(y)) {
    return x * y;
  } else {
    return NaN;
  }
}

Calculator.prototype.divide = function(x, y) {
  if (this.isValidInput(x) && this.isValidInput(y)) {
    if (y > 0) {
      return x / y;
    } else {
      return "Cannot divide by zero.";
    }
  } else {
    return NaN;
  }
}

module.exports = Calculator;
