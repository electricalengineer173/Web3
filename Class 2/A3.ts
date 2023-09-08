// 1

function CtoF(TempC:number):number{
    var TempF:number = (TempC * 9 / 5) + 32;
    return TempF;
}

function FtoC(TempF:number):number{
    var TempC:number = (TempF- 32) * 5/9;
    return TempC;
}
var FarehnheitTemp:number = 34
var CelsiusTemp:number =  34 

console.log(`${CelsiusTemp}°C = ${CtoF(CelsiusTemp)}°F`);
console.log(`${FarehnheitTemp}°F = ${FtoC(FarehnheitTemp)}°C`);


// 2.
function Percentage_converter(total: number, percentage: number): number {
     var percen : number = (percentage / 100) * total;
    return percen;
}

const totalMarks = 100;
const obtainedMarks = 75;
const percentage = Percentage_converter(obtainedMarks, totalMarks);

console.log(`Percentage: ${percentage}%`);


// 3.
function convertDaysToWeeks(days: number): string {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    const Wks = `${weeks} weeks and ${remainingDays} days`
    return Wks;
}

const totalDays = 17;

console.log(`${totalDays} days = ${convertDaysToWeeks(totalDays)}`);


// 4.
function Discount(price: number): number {
    if (price > 100) {
        return price * 0.1; // 10% discount
    } else {
        return price * 0.05; // 5% discount
    }
}

var productPrice:number = 120;

const discountAmount = Discount(productPrice);

console.log(`Discount: $${discountAmount}`);


// 5.
function ageCate(age: number) {
    if (age >= 0 && age <= 12) {
        var cat:String = "Child";
    } else if (age >= 13 && age <= 19) {
        var cat:String = "Teenager";
    } else {
        var cat:String = "Adult";
    }
    console.log(`Category: ${cat}`);
    
}

ageCate(16)

//  6.

function clothsSuggest(temp: number): string {
    if (temp < 10) {
        return "It's cold. Wear warm clothes.";
    } else if (temp >= 10 && temp < 20) {
        return "It's cool. Consider wearing a light jacket.";
    } else {
        return "It's warm. Dress comfortably.";
    }
}

const Temperature = 5;

console.log(clothsSuggest(Temperature));

// 7.
function Divisibility(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both 3 and 5";
    } else if (num % 3 === 0) {
        return "Divisible by 3";
    } else if (num % 5 === 0) {
        return "Divisible by 5";
    } else {
        return "Not divisible by 3 or 5";
    }
}

const num = 15;

console.log(Divisibility(num));

// 8.
function isLeapYear(year: number) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${inputYear} is a leap year.`);
    }
    else{
    console.log(`${inputYear} is not a leap year.`);
}
}

var inputYear:number = 2024;
isLeapYear(inputYear)


// 9.
function DayOfWeek(dayNumber: number): string {
    if (dayNumber === 1) {
        return "Sunday";
    } else if (dayNumber === 2) {
        return "Monday";
    } else if (dayNumber === 3) {
        return "Tuesday";
    } else if (dayNumber === 4) {
        return "Wednesday";
    } else if (dayNumber === 5) {
        return "Thursday";
    } else if (dayNumber === 6) {
        return "Friday";
    } else if (dayNumber === 7) {
        return "Saturday";
    } else {
        return "Invalid day number";
    }
}

var dayNumber:number = 3; // For Tuesday

console.log(`Day of the week: ${DayOfWeek(dayNumber)}`);

// 10.
function taxCalculator(billAmount: number): number {
    if (billAmount > 500) {
        return billAmount * 0.25; // 25% tax
    } else if (billAmount > 200) {
        return billAmount * 0.15; // 15% tax
    } else if (billAmount > 100) {
        return billAmount * 0.10; // 10% tax
    } else {
        return 0;
    }
}

var unitsConsumed:number = 300;
var ratePerUnit:number = 32;

const bill = unitsConsumed * ratePerUnit;
const taxAmount = taxCalculator(bill);
const totalBill = bill + taxAmount;

console.log(`Bill Amount: $${bill}`);
console.log(`Tax Amount: $${taxAmount}`);
console.log(`Total Bill Amount: $${totalBill}`);



