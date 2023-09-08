// 2
// Define the person's name variable
console.log('Task:: 2')
let personName: string = "mariyam zaman";
console.log(`Hello ${personName}, would you like to learn TypeScript?`)


// 3
console.log('\nTask:: 3')
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());

// Print the name in title case
const titleCaseName = personName.replace(/\b\w/g, (char) => char.toLocaleUpperCase());
console.log("Titlecase:", titleCaseName);

// 4
console.log('\nTask:: 4')
// Print the quote and the author
console.log('Albert Einstein once said , "Imagination is more important than knowledge."');

// 5
console.log('\nTask:: 5')
let famous_person: string = 'Albert Einstein';

// Compose the message using the famous person's name
let message: string = 'I admire the wise words of ${famous_person}.';
console.log(message);

console.log('\nTask:: 6')
// 6
let nameW: string = "\tMariyam \t Zaman\n";

// Print the name with whitespace displayed
console.log("Name with whitespace:");
console.log(nameW);

// 7 , 8
console.log('\nTask:: 7,8')
console.log(5 + 3)
console.log(11 - 3)
console.log(4 * 2)
console.log(16 / 2)

// 9 
console.log('\nTask:: 9')
let num: Number = 3;
let msg:String = num.toString() + ' ' + "is my favorite number."
console.log(msg)

// 10
console.log('\nTask:: 10(Comments of the programs)')
// Hi, I just started the assigmentits  its 10PM 22July.
// I've completed 10 programs till now.

// defineed a variabe named as num then
// i make a msg using that 'num' varibale with string. At the end print that msg. 


// 11
console.log('\nTask:: 11')
// Store the names of your friends in an array
let names: string[] = ["Wali", "Wahaj", "Sakina", "David"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//  12
console.log('\nTask:: 12')
for (let i = 0; i < names.length; i++) {
    console.log('Hi', names[i],'What\'s Up');
  }
  
// 13
console.log('\nTask:: 13')
let transFav: string[] = ["125 Bike", "Honda City Car", "bicycle", "scooter"];
// Loop through the array and print statements about each item
for (let i = 0; i < transFav.length; i++)  {
    console.log(`I would like to have a ${transFav[i]}.`);
  }

// for (const i of transFav) {
//   console.log(`I would like to have a ${i}.`);
// }

// 14
console.log('\nTask:: 14')
let guestList: string[] = ["Wali", "Wahaj", "Sakina", "David"];

// Loop through the array and print messages inviting each person to dinner
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}
let rmvPerson: number = 2; 
console.log(`${guestList[rmvPerson]}, can\'t make the dinner.`)

// 15
console.log('\nTask:: 15')
// Update the guest list with the new guest
guestList[rmvPerson] =  "Moona";

for  (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are invited to dinner.`);
  }

console.log(`Dear all, Lets make a big dinner`)  
//   16
console.log('\nTask:: 16')
guestList.unshift("Husnain");
const middlePerson: number = Math.floor(guestList.length / 2);
guestList.splice(middlePerson, 0, "arbab");
guestList.push("Alif");

for  (const i of guestList) {
    console.log(`Dear ${i}, you are invited to dinner.`);
  }

console.log("I can invite only two people for dinner.")

//   17
console.log('\nTask:: 17')
// Loop until only two names remain in the list
while (guestList.length > 2) {

  // Print a message to the removed person
  console.log(`Dear ${guestList.pop()}, I'm sorry, I can't invite you to dinner.`);
}

// Print the final invitation messages for the remaining two guests
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`);
}
guestList.pop()
guestList.pop()
console.log(guestList)


// 18
console.log('\nTask:: 18')
let places: string[] = ['Sakardu', 'Kala Bag Dam','Chitral','Swizer Land','USA']

console.log("Original Order:");
console.log(places)

console.log("\nAlphabetical Order:");
console.log(places.slice().sort())
console.log("\nUnchanged List:");
console.log(places)

console.log("\nReverse Alphabetical Order:");
console.log(places.slice().reverse())
console.log("\nUnchanged List:");
console.log(places)

console.log("\nReversed Order:");
places  = places.slice().reverse()
console.log(places)

console.log("\nReversed Order(Back to Original Order):");
places  = places.slice().reverse()
console.log(places)

console.log("\nSorted in Alphabetical Order:");
places  =  places.slice().sort()
console.log(places)

console.log("\nSorted in Reverse Alphabetical Order:");
console.log(places.sort((a, b) => b.localeCompare(a)));

// 19
console.log('\nTask:: 19')
console.log(`I inivited ${guestList.length} people for dinner.`)

// 20
console.log('\nTask:: 20')
// Create an array to store a list of mountains
const mrcc: string[] = ["K2",'Ravi'];


// 21
console.log('\nTask:: 21')
// Create TypeScript objects containing information about these mountain
const k2Info: { name: string; height: number; location: string } = {
  name: 'K2',
  height: 8611,
  location: 'Pakistan and China',
};

const RaviInfo: { name: string; height: number; location: string } = {
  name: 'Kilimanjaro',
  height: 5895,
  location: 'Tanzania',
};

// Print information about each mountain
console.log(k2Info);
console.log(RaviInfo);


// 22
console.log('\nTask:: 22')
// console.log(mrcc[10])
// output: undefined

// 23

console.log('\nTask:: 23')
let car:string = 'subaru';

console.log("Is car.length >= 5? I predict True.")
console.log(car.length >= 5);    
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
console.log("Is car.length > 1? I predict True.")
console.log(car.length > 1);
console.log("Is car != 'honda'? I predict True.")
console.log(car != 'honda');
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru');

console.log("Is car.length < 5? I predict True.")
console.log(car.length < 5);
console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru');
console.log("Is car == 'audi'? I predict False.")
console.log(car == 'audi');
console.log("Is car.length <= 6? I predict False.")
console.log(car.length <= 6);
console.log("Is car == 'yaho'? I predict False.")
console.log(car == 'yaho');

// 24
console.log('\nTask:: 24')

console.log("car == 'subaru' || car.length>=1? I predict True.")
console.log(car == 'subaru' || car.length>=1);
console.log("Is car == 'subaru'|| car.length<=1? I predict FALSE.")
console.log(car != 'subaru' && car.length>=1);


console.log("car == 'subaru' && car.length>=1? I predict False.")
console.log(car == 'subaru' && car.length==1);
console.log("Is car == 'subaru' || car.length<=1? I predict True.")
console.log(car == 'subaru'&& car.length<=1);

// 25
console.log('\nTask:: 25')
// version 1

let alien_color1: string = 'green';
if (alien_color1=='green'){
    console.log('You earned 5 points for shooting the alien.')
}
// version 2
let alien_color2: string = 'red';
if (alien_color2=='green'){
    console.log('You earned 5 points for shooting the alien.')
}


// 26
console.log('\nTask:: 26')
let alien_color3: string = 'red';
if (alien_color3=='green'){
    console.log('You earned 5 points for shooting the alien.')
}
else{
    console.log('You earned 10 points for shooting the alien.')
}

let alien_color4: string = 'red';
if (alien_color4=='green'){
    console.log('You earned 5 points for shooting the alien.')
}
else{
    console.log('You earned 10 points for shooting the alien.')
}


// 27
console.log('\nTask:: 27')
let alien_color: string = 'red';
// let alien_color: string = 'yellow';
// let alien_color: string = 'green';
if (alien_color=='green'){
    console.log('You earned 5 points for shooting the alien.')
}
else if (alien_color=='yellow'){
    console.log('You earned 10 points for shooting the alien.')
}
else if (alien_color=='red'){
    console.log('You earned 15 points for shooting the alien.')
}

// 28
console.log('\nTask:: 28')
let age : number = 51;

if (age<2){
    console.log('You are a baby.')
}
else if (age == 2 && age <4){
    console.log('You are a toddler.')
}

else if (age >= 4 &&  age < 13){
    console.log('You are a kid.')
}
else if (age >= 13 &&  age < 20){
    console.log('You are a teenager.')
}
else if (age >= 20 && age < 65){
    console.log('You are an adult.')
}
else {
    console.log('You are an elder.')
}


// 29
console.log('\nTask:: 29')
let favorite_fruits: string[] = ['banana', 'apple', 'mango'];

if (favorite_fruits.some((fruit) => fruit === 'banana')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.some((fruit) => fruit === 'apple')) {
  console.log("You really like apples!");
}

if (favorite_fruits.some((fruit) => fruit === 'mango')) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.some((fruit) => fruit === 'orange')) {
  console.log("You really like oranges!");
}

if (favorite_fruits.some((fruit) => fruit === 'grapes')) {
  console.log("You really like grapes!");
}

// 30
console.log('\nTask:: 30')
let usernames: string[] = ['Mariyam', 'Wali', 'Wahaj', 'Alif'];

// Loop through the array and print greetings
for (const username of usernames) {
  if (username === 'Mariyam') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// 31
console.log('\nTask:: 31')
// Check if the list of users is not empty
if (usernames.length === 0) {
  console.log("We need to find some users!");
} 
else {
  // Loop through the array and print greetings
  for (const username of usernames) {
    if (username === 'admin') {
      console.log('Hello admin, would you like to see a status report?');
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all the usernames from the array
usernames = [];

if (usernames.length === 0) {
    console.log("We need to find some users!");
  } else {
    // Loop through the array and print greetings
    for (const username of usernames) {
      if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
      } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
      }
    }
  }


//   32
console.log('\nTask:: 32')
let current_users: string[] = ['Mariyam', 'Wali', 'Wahaj', 'Alif','Sakina'];

let new_users: string[] = ['Mariyam', 'Wali', 'john', 'Husnan','yahoo'];


// Convert all current usernames to lowercase for case-insensitive comparison
const lowercase_current_users = current_users.map((username) => username.toLowerCase());

// Loop through the new_users list to check for unique usernames
for (const new_username of new_users) {

  const lowercase_new_username = new_username.toLowerCase();

  if (lowercase_current_users.indexOf(lowercase_new_username) !== -1) {
    console.log(`Sorry, the username "${new_username}" is already taken. Please choose a different one.`);
  } 
  
  else {
    console.log(`The username "${new_username}" is available.`);
  }

}

// 33
console.log('\nTask:: 33')
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  // Check for special cases (1, 2, and 3)
  if (number === 1) {
    console.log(`${number}st`);
  }
   else if (number === 2) {
    console.log(`${number}nd`);
  } 
  else if (number === 3) {
    console.log(`${number}rd`);
  } 
  else {
    console.log(`${number}th`);
  }
}

// 34
console.log('\nTask:: 34')
let favoritePizzas: string[] = ['Pepperoni', 'Fajita', 'BBQ Chicken'];

// Loop through the array and print a sentence for each pizza
for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// 35
console.log('\nTask:: 35')
let animals: string[] = ['Dog', 'Cat', 'Monkey'];

// Loop through the array and print a statement about each animal
for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");


// 36
console.log('\nTask:: 36')
// function make_shirt(shrt_size, txt){
//     console.log(`The size of shirt is ${shrt_size} with text ${txt}.`)
// }
make_shirt('large','Yahoo')

// 37
console.log('\nTask:: 37')
function make_shirt(_size='large', txt='I love TypeScript'){
    console.log(`The size of shirt is ${_size}  with text ${txt}.`)
}
make_shirt()
make_shirt('medium')
make_shirt('small','Yup')

// 38
console.log('\nTask:: 38')
function describe_city(city: string, country: string = 'default') {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function for three different cities with different countries
  describe_city('Karachi', 'Pakistan');
  describe_city('New York', 'USA');
  describe_city('London'); // This will use the default country value


//   39
console.log('\nTask:: 39')
function city_country(city: string, country: string = 'default'):string{
    return `${city},${country}.`;
  }
  
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Tokyo', 'Japan'));
console.log(city_country('Paris', 'Farance'));

// 40
console.log('\nTask:: 40')
function make_album(artist: string, title: string, tracks?: number): any {

    const obj = {
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
console.log('\nTask:: 4`')
function show_magicians(magic:string[]):void{
    for (const i of magic){
        console.log(`${i}`)
    }
}
let magicians:string[] =['Mariyam','Moona','Wali']
show_magicians(magicians)

// 42
console.log('\nTask:: 42')
function make_great(magic:string[]):string[]{
    let greatMagicians:string[] = []
    for (const i of magic){
        greatMagicians.push(`${i} the Great.`);
    }
    return greatMagicians;
}

let greatmagician  = make_great(magicians)
console.log(greatmagician)
show_magicians(greatmagician)

// 43
console.log('\nTask:: 43')
let ops: string[] = make_great(magicians)
show_magicians(magicians)
show_magicians(ops)

// 44
console.log('\nTask:: 44')
function order_sandwich(...items: string[]): void {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
      console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
  }
  
  // Call the function with different number of arguments to order sandwiches
  order_sandwich('Ham', 'Cheese','Meat');
  order_sandwich( 'Lettuce', 'Tomato', 'Mayonnaise');
  order_sandwich('Chicken', 'Bacon','Pickles', 'Onion');
  

//   45
console.log('\nTask:: 45')
function car_info(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
    const car: { [key: string]: any } = {
      manufacturer: manufacturer,
      model: model,
      ...Object.assign({}, ...options),
    };
    return car;
  }
  
  // Call the function with required information and two other name-value pairs
  let carInfo = car_info('Toyota', 'Corolla', { color: 'Red' }, { feature: 'Black Sunroof' });

  console.log(carInfo);
  
  
  