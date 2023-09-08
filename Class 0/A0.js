var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 2
// Define the person's name variable
console.log('Task:: 2');
var personName = "mariyam zaman";
console.log("Hello ".concat(personName, ", would you like to learn TypeScript?"));
// 3
console.log('\nTask:: 3');
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
// Print the name in title case
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toLocaleUpperCase(); });
console.log("Titlecase:", titleCaseName);
// 4
console.log('\nTask:: 4');
// Print the quote and the author
console.log('Albert Einstein once said , "Imagination is more important than knowledge."');
// 5
console.log('\nTask:: 5');
var famous_person = 'Albert Einstein';
// Compose the message using the famous person's name
var message = 'I admire the wise words of ${famous_person}.';
console.log(message);
console.log('\nTask:: 6');
// 6
var nameW = "\tMariyam \t Zaman\n";
// Print the name with whitespace displayed
console.log("Name with whitespace:");
console.log(nameW);
// 7 , 8
console.log('\nTask:: 7,8');
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// 9 
console.log('\nTask:: 9');
var num = 3;
var msg = num.toString() + ' ' + "is my favorite number.";
console.log(msg);
// 10
console.log('\nTask:: 10(Comments of the programs)');
// Hi, I just started the assigmentits  its 10PM 22July.
// I've completed 10 programs till now.
// defineed a variabe named as num then
// i make a msg using that 'num' varibale with string. At the end print that msg. 
// 11
console.log('\nTask:: 11');
// Store the names of your friends in an array
var names = ["Wali", "Wahaj", "Sakina", "David"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//  12
console.log('\nTask:: 12');
for (var i = 0; i < names.length; i++) {
    console.log('Hi', names[i], 'What\'s Up');
}
// 13
console.log('\nTask:: 13');
var transFav = ["125 Bike", "Honda City Car", "bicycle", "scooter"];
// Loop through the array and print statements about each item
for (var i = 0; i < transFav.length; i++) {
    console.log("I would like to have a ".concat(transFav[i], "."));
}
// for (const i of transFav) {
//   console.log(`I would like to have a ${i}.`);
// }
// 14
console.log('\nTask:: 14');
var guestList = ["Wali", "Wahaj", "Sakina", "David"];
// Loop through the array and print messages inviting each person to dinner
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
var rmvPerson = 2;
console.log("".concat(guestList[rmvPerson], ", can't make the dinner."));
// 15
console.log('\nTask:: 15');
// Update the guest list with the new guest
guestList[rmvPerson] = "Moona";
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are invited to dinner."));
}
console.log("Dear all, Lets make a big dinner");
//   16
console.log('\nTask:: 16');
guestList.unshift("Husnain");
var middlePerson = Math.floor(guestList.length / 2);
guestList.splice(middlePerson, 0, "arbab");
guestList.push("Alif");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var i = guestList_2[_a];
    console.log("Dear ".concat(i, ", you are invited to dinner."));
}
console.log("I can invite only two people for dinner.");
//   17
console.log('\nTask:: 17');
// Loop until only two names remain in the list
while (guestList.length > 2) {
    // Print a message to the removed person
    console.log("Dear ".concat(guestList.pop(), ", I'm sorry, I can't invite you to dinner."));
}
// Print the final invitation messages for the remaining two guests
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var guest = guestList_3[_b];
    console.log("Dear ".concat(guest, ", you are still invited to dinner. Please join us."));
}
guestList.pop();
guestList.pop();
console.log(guestList);
// 18
console.log('\nTask:: 18');
var places = ['Sakardu', 'Kala Bag Dam', 'Chitral', 'Swizer Land', 'USA'];
console.log("Original Order:");
console.log(places);
console.log("\nAlphabetical Order:");
console.log(places.slice().sort());
console.log("\nUnchanged List:");
console.log(places);
console.log("\nReverse Alphabetical Order:");
console.log(places.slice().reverse());
console.log("\nUnchanged List:");
console.log(places);
console.log("\nReversed Order:");
places = places.slice().reverse();
console.log(places);
console.log("\nReversed Order(Back to Original Order):");
places = places.slice().reverse();
console.log(places);
console.log("\nSorted in Alphabetical Order:");
places = places.slice().sort();
console.log(places);
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places.sort(function (a, b) { return b.localeCompare(a); }));
// 19
console.log('\nTask:: 19');
console.log("I inivited ".concat(guestList.length, " people for dinner."));
// 20
console.log('\nTask:: 20');
// Create an array to store a list of mountains
var mrcc = ["K2", 'Ravi'];
// 21
console.log('\nTask:: 21');
// Create TypeScript objects containing information about these mountain
var k2Info = {
    name: 'K2',
    height: 8611,
    location: 'Pakistan and China',
};
var RaviInfo = {
    name: 'Kilimanjaro',
    height: 5895,
    location: 'Tanzania',
};
// Print information about each mountain
console.log(k2Info);
console.log(RaviInfo);
// 22
console.log('\nTask:: 22');
// console.log(mrcc[10])
// output: undefined
// 23
console.log('\nTask:: 23');
var car = 'subaru';
console.log("Is car.length >= 5? I predict True.");
console.log(car.length >= 5);
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car.length > 1? I predict True.");
console.log(car.length > 1);
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car.length < 5? I predict True.");
console.log(car.length < 5);
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');
console.log("Is car.length <= 6? I predict False.");
console.log(car.length <= 6);
console.log("Is car == 'yaho'? I predict False.");
console.log(car == 'yaho');
// 24
console.log('\nTask:: 24');
console.log("car == 'subaru' || car.length>=1? I predict True.");
console.log(car == 'subaru' || car.length >= 1);
console.log("Is car == 'subaru'|| car.length<=1? I predict FALSE.");
console.log(car != 'subaru' && car.length >= 1);
console.log("car == 'subaru' && car.length>=1? I predict False.");
console.log(car == 'subaru' && car.length == 1);
console.log("Is car == 'subaru' || car.length<=1? I predict True.");
console.log(car == 'subaru' && car.length <= 1);
// 25
console.log('\nTask:: 25');
// version 1
var alien_color1 = 'green';
if (alien_color1 == 'green') {
    console.log('You earned 5 points for shooting the alien.');
}
// version 2
var alien_color2 = 'red';
if (alien_color2 == 'green') {
    console.log('You earned 5 points for shooting the alien.');
}
// 26
console.log('\nTask:: 26');
var alien_color3 = 'red';
if (alien_color3 == 'green') {
    console.log('You earned 5 points for shooting the alien.');
}
else {
    console.log('You earned 10 points for shooting the alien.');
}
var alien_color4 = 'red';
if (alien_color4 == 'green') {
    console.log('You earned 5 points for shooting the alien.');
}
else {
    console.log('You earned 10 points for shooting the alien.');
}
// 27
console.log('\nTask:: 27');
var alien_color = 'red';
// let alien_color: string = 'yellow';
// let alien_color: string = 'green';
if (alien_color == 'green') {
    console.log('You earned 5 points for shooting the alien.');
}
else if (alien_color == 'yellow') {
    console.log('You earned 10 points for shooting the alien.');
}
else if (alien_color == 'red') {
    console.log('You earned 15 points for shooting the alien.');
}
// 28
console.log('\nTask:: 28');
var age = 51;
if (age < 2) {
    console.log('You are a baby.');
}
else if (age == 2 && age < 4) {
    console.log('You are a toddler.');
}
else if (age >= 4 && age < 13) {
    console.log('You are a kid.');
}
else if (age >= 13 && age < 20) {
    console.log('You are a teenager.');
}
else if (age >= 20 && age < 65) {
    console.log('You are an adult.');
}
else {
    console.log('You are an elder.');
}
// 29
console.log('\nTask:: 29');
var favorite_fruits = ['banana', 'apple', 'mango'];
if (favorite_fruits.some(function (fruit) { return fruit === 'banana'; })) {
    console.log("You really like bananas!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'apple'; })) {
    console.log("You really like apples!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'mango'; })) {
    console.log("You really like mangoes!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'orange'; })) {
    console.log("You really like oranges!");
}
if (favorite_fruits.some(function (fruit) { return fruit === 'grapes'; })) {
    console.log("You really like grapes!");
}
// 30
console.log('\nTask:: 30');
var usernames = ['Mariyam', 'Wali', 'Wahaj', 'Alif'];
// Loop through the array and print greetings
for (var _c = 0, usernames_1 = usernames; _c < usernames_1.length; _c++) {
    var username = usernames_1[_c];
    if (username === 'Mariyam') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// 31
console.log('\nTask:: 31');
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var _d = 0, usernames_2 = usernames; _d < usernames_2.length; _d++) {
        var username = usernames_2[_d];
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all the usernames from the array
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print greetings
    for (var _e = 0, usernames_3 = usernames; _e < usernames_3.length; _e++) {
        var username = usernames_3[_e];
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
//   32
console.log('\nTask:: 32');
var current_users = ['Mariyam', 'Wali', 'Wahaj', 'Alif', 'Sakina'];
var new_users = ['Mariyam', 'Wali', 'john', 'Husnan', 'yahoo'];
// Convert all current usernames to lowercase for case-insensitive comparison
var lowercase_current_users = current_users.map(function (username) { return username.toLowerCase(); });
// Loop through the new_users list to check for unique usernames
for (var _f = 0, new_users_1 = new_users; _f < new_users_1.length; _f++) {
    var new_username = new_users_1[_f];
    var lowercase_new_username = new_username.toLowerCase();
    if (lowercase_current_users.indexOf(lowercase_new_username) !== -1) {
        console.log("Sorry, the username \"".concat(new_username, "\" is already taken. Please choose a different one."));
    }
    else {
        console.log("The username \"".concat(new_username, "\" is available."));
    }
}
// 33
console.log('\nTask:: 33');
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _g = 0, numbers_1 = numbers; _g < numbers_1.length; _g++) {
    var number = numbers_1[_g];
    // Check for special cases (1, 2, and 3)
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
// 34
console.log('\nTask:: 34');
var favoritePizzas = ['Pepperoni', 'Fajita', 'BBQ Chicken'];
// Loop through the array and print a sentence for each pizza
for (var _h = 0, favoritePizzas_1 = favoritePizzas; _h < favoritePizzas_1.length; _h++) {
    var pizza = favoritePizzas_1[_h];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I really love pizza!");
// 35
console.log('\nTask:: 35');
var animals = ['Dog', 'Cat', 'Monkey'];
// Loop through the array and print a statement about each animal
for (var _j = 0, animals_1 = animals; _j < animals_1.length; _j++) {
    var animal = animals_1[_j];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
// 36
console.log('\nTask:: 36');
// function make_shirt(shrt_size, txt){
//     console.log(`The size of shirt is ${shrt_size} with text ${txt}.`)
// }
make_shirt('large', 'Yahoo');
// 37
console.log('\nTask:: 37');
function make_shirt(_size, txt) {
    if (_size === void 0) { _size = 'large'; }
    if (txt === void 0) { txt = 'I love TypeScript'; }
    console.log("The size of shirt is ".concat(_size, "  with text ").concat(txt, "."));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'Yup');
// 38
console.log('\nTask:: 38');
function describe_city(city, country) {
    if (country === void 0) { country = 'default'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities with different countries
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('London'); // This will use the default country value
//   39
console.log('\nTask:: 39');
function city_country(city, country) {
    if (country === void 0) { country = 'default'; }
    return "".concat(city, ",").concat(country, ".");
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'Farance'));
// 40
console.log('\nTask:: 40');
function make_album(artist, title, tracks) {
    var obj = {
        artist: artist,
        album_title: title,
    };
    if (tracks !== undefined) {
        obj['tracks'] = tracks;
    }
    return obj;
}
// Call the function to create three album dictionaries
console.log(make_album('Enisa', 'Rebel'));
console.log(make_album('Selena', '19 caret', 12));
console.log(make_album('Tylor', 'Delicate', 8));
//   41
console.log('\nTask:: 4`');
function show_magicians(magic) {
    for (var _i = 0, magic_1 = magic; _i < magic_1.length; _i++) {
        var i = magic_1[_i];
        console.log("".concat(i));
    }
}
var magicians = ['Mariyam', 'Moona', 'Wali'];
show_magicians(magicians);
// 42
console.log('\nTask:: 42');
function make_great(magic) {
    var greatMagicians = [];
    for (var _i = 0, magic_2 = magic; _i < magic_2.length; _i++) {
        var i = magic_2[_i];
        greatMagicians.push("".concat(i, " the Great."));
    }
    return greatMagicians;
}
var greatmagician = make_great(magicians);
console.log(greatmagician);
show_magicians(greatmagician);
// 43
console.log('\nTask:: 43');
var ops = make_great(magicians);
show_magicians(magicians);
show_magicians(ops);
// 44
console.log('\nTask:: 44');
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different number of arguments to order sandwiches
order_sandwich('Ham', 'Cheese', 'Meat');
order_sandwich('Lettuce', 'Tomato', 'Mayonnaise');
order_sandwich('Chicken', 'Bacon', 'Pickles', 'Onion');
//   45
console.log('\nTask:: 45');
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, model: model }, Object.assign.apply(Object, __spreadArray([{}], options, false)));
    return car;
}
// Call the function with required information and two other name-value pairs
var carInfo = car_info('Toyota', 'Corolla', { color: 'Red' }, { feature: 'Black Sunroof' });
console.log(carInfo);
