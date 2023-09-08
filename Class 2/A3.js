// 1
function CtoF(TempC) {
    var TempF = (TempC * 9 / 5) + 32;
    return TempF;
}
function FtoC(TempF) {
    var TempC = (TempF - 32) * 5 / 9;
    return TempC;
}
var FarehnheitTemp = 34;
var CelsiusTemp = 34;
console.log("".concat(CelsiusTemp, "\u00B0C = ").concat(CtoF(CelsiusTemp), "\u00B0F"));
console.log("".concat(FarehnheitTemp, "\u00B0F = ").concat(FtoC(FarehnheitTemp), "\u00B0C"));
// 2.
function Percentage_converter(total, percentage) {
    var percen = (percentage / 100) * total;
    return percen;
}
var totalMarks = 100;
var obtainedMarks = 75;
var percentage = Percentage_converter(obtainedMarks, totalMarks);
console.log("Percentage: ".concat(percentage, "%"));
// 3.
function convertDaysToWeeks(days) {
    var weeks = Math.floor(days / 7);
    var remainingDays = days % 7;
    var Wks = "".concat(weeks, " weeks and ").concat(remainingDays, " days");
    return Wks;
}
var totalDays = 17;
console.log("".concat(totalDays, " days = ").concat(convertDaysToWeeks(totalDays)));
// 4.
function Discount(price) {
    if (price > 100) {
        return price * 0.1; // 10% discount
    }
    else {
        return price * 0.05; // 5% discount
    }
}
var productPrice = 120;
var discountAmount = Discount(productPrice);
console.log("Discount: $".concat(discountAmount));
// 5.
function ageCate(age) {
    if (age >= 0 && age <= 12) {
        var cat = "Child";
    }
    else if (age >= 13 && age <= 19) {
        var cat = "Teenager";
    }
    else {
        var cat = "Adult";
    }
    console.log("Category: ".concat(cat));
}
ageCate(16);
//  6.
function clothsSuggest(temp) {
    if (temp < 10) {
        return "It's cold. Wear warm clothes.";
    }
    else if (temp >= 10 && temp < 20) {
        return "It's cool. Consider wearing a light jacket.";
    }
    else {
        return "It's warm. Dress comfortably.";
    }
}
var Temperature = 5;
console.log(clothsSuggest(Temperature));
// 7.
function Divisibility(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both 3 and 5";
    }
    else if (num % 3 === 0) {
        return "Divisible by 3";
    }
    else if (num % 5 === 0) {
        return "Divisible by 5";
    }
    else {
        return "Not divisible by 3 or 5";
    }
}
var num = 15;
console.log(Divisibility(num));
// 8.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("".concat(inputYear, " is a leap year."));
    }
    else {
        console.log("".concat(inputYear, " is not a leap year."));
    }
}
var inputYear = 2024;
isLeapYear(inputYear);
// 9.
function DayOfWeek(dayNumber) {
    if (dayNumber === 1) {
        return "Sunday";
    }
    else if (dayNumber === 2) {
        return "Monday";
    }
    else if (dayNumber === 3) {
        return "Tuesday";
    }
    else if (dayNumber === 4) {
        return "Wednesday";
    }
    else if (dayNumber === 5) {
        return "Thursday";
    }
    else if (dayNumber === 6) {
        return "Friday";
    }
    else if (dayNumber === 7) {
        return "Saturday";
    }
    else {
        return "Invalid day number";
    }
}
var dayNumber = 3; // For Tuesday
console.log("Day of the week: ".concat(DayOfWeek(dayNumber)));
// 10.
function taxCalculator(billAmount) {
    if (billAmount > 500) {
        return billAmount * 0.25; // 25% tax
    }
    else if (billAmount > 200) {
        return billAmount * 0.15; // 15% tax
    }
    else if (billAmount > 100) {
        return billAmount * 0.10; // 10% tax
    }
    else {
        return 0;
    }
}
var unitsConsumed = 300;
var ratePerUnit = 32;
var bill = unitsConsumed * ratePerUnit;
var taxAmount = taxCalculator(bill);
var totalBill = bill + taxAmount;
console.log("Bill Amount: $".concat(bill));
console.log("Tax Amount: $".concat(taxAmount));
console.log("Total Bill Amount: $".concat(totalBill));
