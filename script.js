// First fix your path, from where are you going to learn stuff. Currently I am on Udemy JS course, some YouTube
// Channels. Write down every fucking thing, whatever you are learning, by just watching tutorial you are not going to learn anything.
// Write down or comment all the stuff like : From which youtube video did you watch which concept, date,day and time also. It will help you to analyse you
// to analyse your progress 
////////////////////////////////////////////////////////////////////////////////////////////////

// If you want to learn web dev just learn HTML, CSS and JavaScript. That is more than enough for you.
// Try to find your path 
// I have wasted a lot of time allready, now its time to organise yourself to a path, strategically and start learn from zero or more
// Start building out stuff, by googling stuff, after you learn basic, thats how you will learn things 
////////////////////////////////////////////////////////////////////////////////////////////////
// Some tips from Dev Ed : Youtube Channel 
// 1. Watch entire tutorial on Youtube
// 2. Code along with tutorial 
// 3. Comment every process of the code step by step on another file 
// 4. Recall doing the same tutorial and if you forget something see your own notes
// 5. Then with the knowledge do your personal projects
// 

// let js = 'amazing';
// if (js === 'amazing') alert('JS is fun');
// 50 + 50;
// console.log(50 + 50 + 50);

// let firstName = 'Swapnil';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
////////////////////////////////////////////////////////////////////////////////////////////////
//Operator Precendence
// const now = 2037;
// const ageJonas = 2021 - 1991;
// const ageSarah = 2021 - 2018;

// console.log(now - 1991 > now - 2018);


// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);



// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////////////////////////////////

// coding challenge  1 

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > heightJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);



////////////////////////////////////////////////////////////////
// strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// // // const jonas = "I'm " + firstName + ' a ' + (year - birthYear) + job + '!';
// // // console.log(jonas);

// // const jonasNew = 'I`m ${firstName}, a ${year-birthYear}';
// // console.log(jonasNew);


// ////////////////////////////////////////////////
// // If/Else statements 
// const age = 15;
// const insOldEnough = age >= 17;

// if (age >= 18) {
//     console.log('Sarah can start driving licencing ');
// } else {
//     const yearsLeft = 18 - age;
//     console.log('Sarah is too young / wait another $ {yearsLeft} years ');
// }

// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);


////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge // 2 -

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > heightJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);
// console.log(BMIMark, BMIJohn);



// if (BMIMark > BMIJohn) {
//     console.log("Marks BMI is higher than John`s");
// } else {
//     console.log("Johns BMI is higher than John`s");
// }



////////////////////////////////////////////////////////////////////////////////////////////
// 20. Type Conversion and Coercion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 18);



////////////////////////////////////////////////////////////////////////////////////////////
// Section: 3 Lec No : 32
// Activeate Strict Mode
// 'use strict';


// let hasDriversLiscence = false;
// const passTest = true;

// if (passTest) hasDriversLiscence = true;
// if (hasDriversLiscence) console.log('I can Dirve :D');

// const interface = 'Audio';
// const private = 543;   Some words are reserved so we cannot use them here
// const if = 23; 


// Always use strict mode in your code

/*
////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 33
// fundamental building block of javascript is functions 
// Function : piece of code we can use over and over again
// finction is Keyword

function logger() {
    // all the code within this block is called as function buddy
    console.log('My name  is Swapnil');
    //  If we want this cod emultiple times in our code then we use function 
}

// calling / running / invoking 
logger();
logger();
logger();
logger();
// we can use this as many time we want

// funcrions can do lot more than reusig 
function fruitProcessor(apples, oranges) {
    // Choose descriptive function names
    console.log(apples, oranges);
    //    Apple and oranges are parameters / using as just normal variables 
    const juice = 'Juice with ${apples} apples and ${oranges}';
    return juice;
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


////////////////////////////////////////////////////////////////////////////////////////////
conlose.log() is also an build in function 
*/


////////////////////////////////////////////////////////////////////////////////////////////
// DRY : dont repeate yourself : functions 
////////////////////////////////////////////////////////////////////////////////////////////

/*// Lec : 34
// Function declaration and Expression 

//function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(2001);
console.log(age1);


// function Expression 
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2003);

console.log(age1, age2);
*/
/* 
////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 35
// Arrow functions : Added in ES6 : Shorter form of function
// Shorter form of function, faster to write

// function Expression 
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

// Arrow function 
// birthYear => 2037 - birthYear; //To store it 
const calcAge3 = birthYear => 2037 - birthYear;
// Here we store the fnuction expression in variable known as calcAge3 
// One liner function
const age3 = calcAge3(1991);
console.log(age3);
// The value we claculated give output without writing return value
// We dont need parenthesis here, we just write one line of code Here
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return '${firstName} return is ${retirement} years';
}

console.log(yearsUntilRetirement(1991, 'Swapnil'));
console.log(yearsUntilRetirement(1990, 'Ajay'));

// Using arrow function is easy but get complicated later 
// You need to learn step by step, if anyone tells you everything at the same time you will get overwelmehed 
*/ //

////////////////////////////////////////////////////////////////////////////////////////////
/*
// Lec No : 36 
// Function calling other functions
// We do many times in JS thats why it is so important, Beginners struggle with this a lot 

function cutFruitPieces(fruit) {
    return fruit = 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${orangePieces} piece of apples and ${orangePieces} piece of oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));

// Calling a function inside a function : DatafLow

*/

////////////////////////////////////////////////////////////////////////////////////////////
// Lecture No: 37 - Reviewing Functions Everything we learn Until 


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// Section 8 : How JS works behind the screen