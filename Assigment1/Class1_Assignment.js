//-----------------------------------
// Your assignment for the week is:
//  - Print a message like "Hey Abu Hurairah, I have started learning TYPESCRIPT."
//  - Store your name in a variable and print it.
//  - Store 10 numbers in different variables.
//    - Add all of them and print the SUM.
//    - Print the Difference (subtraction).
//    - Print the result after multiplying all.
//  - Take two numbers and print the division result.
//  - Now, perform all four operations with the given numbers, print the results, and observe the order in which the operations take place.
// -----------------------------
console.log("Hey Abu Hurairah, I have started learning TYPESCRIPT.");
var name_ = "Mariyam Zaman";
console.log(name_);
var num1 = 1;
var num2 = 1;
var num3 = 1;
var num4 = 1;
var num5 = 1;
var num6 = 1;
var num7 = 1;
var num8 = 100;
var num9 = 1;
var num10 = 2;
var sum_ = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
console.log("Sum of 10 number =", sum_);
var sub_ = num1 - num2 - num3 - num4 - num5 - num6 - num7 - num8 - num9 - num10;
console.log("Subtraction of 10 number =", sub_);
var mul_ = num1 * num2 * num3 * num4 * num5 * num6 * num7 * num8 * num9 * num10;
console.log("Multiplication of 10 numbers =", mul_);
console.log("Division of two numbers is", 400 / 2.5);
var operator_seq = num1 * num4 / num6 + num9 - num10;
console.log("Testing the order of four operations with the given numbers::", operator_seq);
