function calculate() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);

  let sum = a + b;
  let diff = a - b;
  let product = a * b;

  document.getElementById("result").innerHTML =
    "Sum: " +
    sum +
    "<br>" +
    "Difference: " +
    diff +
    "<br>" +
    "Product: " +
    product;
}