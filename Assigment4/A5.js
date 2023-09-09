//  1.
function sumNEvenNumbers(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += 2 * i;
    }
    return sum;
}
var n = 4;
console.log("Sum of first ".concat(n, " even numbers: ").concat(sumNEvenNumbers(n)));
// 2.
function printEvenNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Even Numbers:");
printEvenNumbers(arr);
// 3.
function removeEvenNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
            i--; // Adjust index after removal
        }
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original Array:", arr);
console.log("Array with Odd Numbers Only:", removeEvenNumbers(arr));
// 4.
function CircleArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area;
}
var circleRadius = 5;
console.log("Area of a circle with radius ".concat(circleRadius, ": ").concat(CircleArea(circleRadius)));
// 5.
function removeFailingGrades(grades) {
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i--; // Adjust index after removal
        }
    }
    return grades;
}
var gradesList = [95, 42, 80, 20, 65, 90, 40];
console.log("Original Grades:", gradesList);
console.log("Passing Grades:", removeFailingGrades(gradesList));
//  6.
function findLargestElement(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
var numbersArray = [12.5, 5.6, 67, 89, 34, 56, 18];
console.log("Largest Element:", findLargestElement(numbersArray));
