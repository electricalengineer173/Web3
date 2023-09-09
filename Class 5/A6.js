//  1.
var arr1 = [-1, 2, -90, 89, -5];
var filtered_arr = arr1.filter(function (number) { return number >= 0; });
console.log("Filtered Array:", filtered_arr);
// 2.
var arr2 = [1, 2, 3, 4, 5];
var resultantarr = arr2.map(function (number) { return number * 2; });
console.log("Arrayx2:", resultantarr);
// 3.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var filteredFruits = fruits.filter(function (fruit) { return fruit.length > 5; });
console.log("Filtered Fruits:", filteredFruits);
//  4.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumberSquare = arr
    .filter(function (number) { return number % 2 === 0; })
    .map(function (number) { return number * number; });
console.log("Squared of Even Numbers in Array:", evenNumberSquare);
// 5.
var celsiusTempe = [0, 10, 20, 30, 40];
var fahrenheitTempe = celsiusTempe.map(function (celsius) { return (celsius * 9 / 5) + 32; });
console.log("Fahrenheit Temperatures:", fahrenheitTempe);
// 6.
var array4 = [3, 6, 9, 12, 15, 18];
var oddNumbersSqr = array4
    .filter(function (number) { return number % 2 !== 0; })
    .map(function (number) { return number * 2; });
console.log("Odd Numbers x 2:", oddNumbersSqr);
// 7.
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach(function (name) { return console.log("".concat(name, "!")); });
