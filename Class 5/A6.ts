//  1.

let arr1: number[] = [-1, 2, -90, 89, -5];

let filtered_arr: number[] = arr1.filter(number => number >= 0);

console.log("Filtered Array:", filtered_arr);

// 2.
let arr2: number[] = [1, 2, 3, 4, 5];

let resultantarr: number[] = arr2.map(number => number * 2);

console.log("Arrayx2:", resultantarr);


// 3.

let fruits: string[] = ["apple", "banana", "cherry", "date", "grape"];

let filteredFruits: string[] = fruits.filter(fruit => fruit.length > 5);

console.log("Filtered Fruits:", filteredFruits);

//  4.

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumberSquare: number[] = arr

  .filter(number => number % 2 === 0)
  .map(number => number * number);

console.log("Squared of Even Numbers in Array:", evenNumberSquare);

// 5.

let celsiusTempe: number[] = [0, 10, 20, 30, 40];
let fahrenheitTempe: number[] = celsiusTempe.map(
  celsius => (celsius * 9/5) + 32
);

console.log("Fahrenheit Temperatures:", fahrenheitTempe);


// 6.

let  array4: number[] = [3, 6, 9, 12, 15, 18];

const oddNumbersSqr: number[] = array4
  .filter(number => number % 2 !== 0)
  .map(number => number * 2);

console.log("Odd Numbers x 2:", oddNumbersSqr);

// 7.
let names: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];

names.forEach(name => console.log(`${name}!`));

