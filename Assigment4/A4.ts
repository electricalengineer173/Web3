//  1.

function sumNEvenNumbers(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 2 * i;
    }
    return sum;
}

var n:number = 4;
console.log(`Sum of first ${n} even numbers: ${sumNEvenNumbers(n)}`);


// 2.

function printEvenNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

var arr : number[]= [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Even Numbers:");
printEvenNumbers(arr);

// 3.
function removeEvenNumbers(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, 1);
            i--; // Adjust index after removal
        }
    }
    return arr;
}

var arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original Array:", arr);
console.log("Array with Odd Numbers Only:", removeEvenNumbers(arr));


// 4.
function CircleArea(radius: number): number {
    var area: number =  Math.PI * Math.pow(radius, 2);
    return area
}

var circleRadius:number = 5;
console.log(`Area of a circle with radius ${circleRadius}: ${CircleArea(circleRadius)}`);


// 5.
function removeFailingGrades(grades: number[]): number[] {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
            i--; // Adjust index after removal
        }
    }
    return grades;
}

var gradesList: number[] = [95, 42, 80, 20, 65, 90, 40];
console.log("Original Grades:", gradesList);
console.log("Passing Grades:", removeFailingGrades(gradesList));

//  6.

function findLargestElement(arr: number[]): number {
    var largest : number = arr[0];
    for (var i : number = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

var numbersArray:number[] = [12.5, 5.6, 67, 89, 34, 56, 18];
console.log("Largest Element:", findLargestElement(numbersArray));

