// 1.
function push(arr: any[], index: number, value: any): any[] {
    arr.splice(index, 0, value);
    return arr;
}

const myArray = [1, 2, 3, 4, 5];
const index = 2;
const value = 99;

console.log(push(myArray, index, value));

// 2.
var shoppingCart:String[] = [];

function addItem(item: string) {
    shoppingCart.push(item);
}

function removeItem(item: string) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}

function updateQuantity(item: string, newQuantity: number) {
    const index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart[index] = `${item} Qnty${newQuantity}`;
    }
}

function printCartContents() {
    console.log("Cart Contents:");
    shoppingCart.forEach(item => console.log(item));
}

addItem("Apple");
addItem("Banana");
addItem("Orange");
printCartContents();

removeItem("Banana");
printCartContents();

updateQuantity("Apple", 3);
printCartContents();


//  3.
var num:number = 1;
var count:number = 0;

while (count < 25) {
    console.log(num);
    num++;
    count++;
}

// 4.
var num:number= 2;
var count:number = 0;

while (count < 10) {
    console.log(num);
    num += 2;
    count++;
}

// 5.
function Factorial(n: number): number {
    var factorial:number = 1;
    var i: number = 1;

    if (n>0){
    while (i <= n) {
        factorial *= i;
        i++;
        }
    }


    return factorial;
}

var num:number = -5;
console.log(`Factorial of ${num} is ${Factorial(num)}`);


// 6.
function removeNegativeNumbers(arr: number[]): number[] {
    var i:number = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}

var numbersArray:number[]= [1, -24, 9, -4, 5];
console.log(removeNegativeNumbers(numbersArray));


//  7.
function SumOfNumbers(arr: number[]): number {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}

var arr:number[] = [1, 2, 3, 4, 5];
console.log(`Sum of numbers: ${SumOfNumbers(numbersArray)}`);


//  8.
var celsiusTemp: number[]= [0, 10, 20, 30, 40];
var fahrenheitTemp:number[] = [];
var i:number = 0;

while (i < celsiusTemp.length) {
    const celsius = celsiusTemp[i];
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitTemp.push(fahrenheit);
    i++;
}

console.log("Celsius Temperatures:", celsiusTemp);
console.log("Fahrenheit Temperatures:", fahrenheitTemp);
