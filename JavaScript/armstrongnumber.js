function solve(...args) {
  /*
    args: Problem inputs (can be one or multiple values)
    Return: Final computed result as string
  */

  // Single input: the number to check
  const num = parseInt(args[0]);

  // Store original number
  let original = num;

  // Variables for calculation
  let sum = 0;
  let digits = num.toString().length;
  let temp = num;

  // Find sum of each digit raised to the power of number of digits
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  let result = null;

  // Check Armstrong condition
  if (sum === original) {
    result = `${original} is an Armstrong number`;
  } else {
    result = `${original} is not an Armstrong number`;
  }

  return result;
}