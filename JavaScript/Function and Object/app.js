let numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);

// normal function with no parameters
// function greet(){
//     console.log("Hello, World!");
// }
// greet(); // Hello, World!

// normal function
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3)); // 6

// function expression
let divide = function(a,b){
    return a/b;
}
console.log(divide(10,2)); // 5

// normal function with expression
let add = function(a,b){
    return a+b;
}
console.log(add(5,7)); // 12

// normal function with no parameters
// function greet(){
//     console.log("Hello CSE-22");
// }
// greet(); // Hello, World

// const greet = function(){
//     console.log("Hello CSE-22");
// }
// console.log(greet);

// arrow function with no parameters
let sayHi = () => console.log("Hi!");
sayHi(); //Hi!

// arrow function with single parameters
let square = x => x*x;
console.log(square(4)); // 16

// arrow function with one parameter
const greetUser = (name) => {
    console.log(`Hello, ${name}!`);
}
greetUser("Alice"); // Hello, Alice!

// map on array
// map creates a new array by apllying a
// function to each element of the original array
let newarray = [1, 2, 3, 4, 5];
let squaredArray = newarray.map((num) => num*num);
console.log(squaredArray); // [ 1, 4, 9, 16, 25 ]