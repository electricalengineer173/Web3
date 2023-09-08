// 1.
function push(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var myArray = [1, 2, 3, 4, 5];
var index = 2;
var value = 99;
console.log(push(myArray, index, value));
// 2.
var shoppingCart = [];
function addItem(item) {
    shoppingCart.push(item);
}
function removeItem(item) {
    var index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart.splice(index, 1);
    }
}
function updateQuantity(item, newQuantity) {
    var index = shoppingCart.indexOf(item);
    if (index !== -1) {
        shoppingCart[index] = "".concat(item, " Qnty").concat(newQuantity);
    }
}
function printCartContents() {
    console.log("Cart Contents:");
    shoppingCart.forEach(function (item) { return console.log(item); });
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
var num = 1;
var count = 0;
while (count < 25) {
    console.log(num);
    num++;
    count++;
}
// 4.
var num = 2;
var count = 0;
while (count < 10) {
    console.log(num);
    num += 2;
    count++;
}
// 5.
function Factorial(n) {
    var factorial = 1;
    var i = 1;
    if (n > 0) {
        while (i <= n) {
            factorial *= i;
            i++;
        }
    }
    return factorial;
}
var num = -5;
console.log("Factorial of ".concat(num, " is ").concat(Factorial(num)));
// 6.
function removeNegativeNumbers(arr) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 0) {
            arr.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return arr;
}
var numbersArray = [1, -24, 9, -4, 5];
console.log(removeNegativeNumbers(numbersArray));
//  7.
function SumOfNumbers(arr) {
    var sum = 0;
    var i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
var arr = [1, 2, 3, 4, 5];
console.log("Sum of numbers: ".concat(SumOfNumbers(numbersArray)));
//  8.
var celsiusTemp = [0, 10, 20, 30, 40];
var fahrenheitTemp = [];
var i = 0;
while (i < celsiusTemp.length) {
    var celsius = celsiusTemp[i];
    var fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitTemp.push(fahrenheit);
    i++;
}
console.log("Celsius Temperatures:", celsiusTemp);
console.log("Fahrenheit Temperatures:", fahrenheitTemp);
