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
//  Not understand enything nees to wath again 

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
// Section 8 : How JS works behind the screen
// Lec Number : 87 -Section intro
// Lec No : 88 - Section Intro 
// Lec No : An High Level Overview of JAvaScript 
// JS is a High Level, OOP, Multi_paradigm Programming Language
// ❤
// 😁High-Level : Any computer program neeeds resources : Memory 
// Low-Level : C - Where we have to manually manage resources 
// But in High level languages we dont have to  manually manage resources 
// Downside is program in Python and JS (which are high level languages), progrms are never to be that fast 
// 😄Garbage Collectio : JS removes objects in memory which are of not any use . Its lile JS have a cleaning guy, we dont have to work on this by ourselves
// 😀Interpreted or just-in-time compiled : We write code in JS but to understand to computer we need to convert it into machine language in the 0s and 1s form
// and that process is known as compilation or and the software does that is known as Compiler
// But in JS this process happens in JS engine Thats why we called it as interpreted or just-in-time compiler
// 😉Multi-paradigm : An approach and mindset of set structuring code, which will direct your coding style and technique
// Three Popular Paradigm are 
// 1. Precedural Programming
// 2. Object-oriented Programming(OOP) :Prototype based object oriented approach 
// 3. Functional Programming(FP) 
// Many languages are only Object oriented or Functional, but Js is so flexible that it has all that features that
// 
// First-classs functions : Functions are simply treated as variables. We can pass them into other functions, and return them from functions. 
// JS is Dynaimically-typed language => No data type definitoin. Types become known at euntime / Datatyped variable is automatically changed
// Single-threaded programming : This two are most complicated topics 
// Non-blocking event loop : and this one also / JS runs in one simgle threrad, so it can do only one thing at a time
// So what about a long-running task ? : Sounds like it would block the single thread. However, we want non-blocking behaviour!
// How do we achieve that : By event loop
// Event loop : By using an Event loop : takes long running tasks, execute them in the "background", and puts them back in the main thread once they are finished  

////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 90 - The JS engine and Runtimes 
// What is JS engine : Program that Executes JS code Ex: Google, Node.js, V8 Engine  
// Its easy to understand JS engine, but complicated to understand it components 
// Any JS engine conatains CALL STACK and HEAP
// CALL STACK is the place where all the code actually executes, using something called Ecectution Context 
// HEAP is unstrucctured pool, where objects are stored 
// Computer Science Sidenote: Compilation vs Interpretation
// Compilation : Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// Interpretation : Interpreter runs through the source code and execute it line by line 
// Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.
//  Just-in-time (JIT) compilation Followed by Js
// Parsing :AST => Compilation => Execution(Happens in CALL STACK) => Optimization
// The Bigger Picture: JS Runtime |

// WEB APIs : DOM, Timers, Fetch API ...
// Callback Queue : click, timer, data
// Call back function from DOM event lidtener 
// Thread Pool 

////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 91 => Execution context and the call stack 
// After compilation  of the code => Creation of global execution context (for top-level code) -> Not inside a
// function => Executoin of top level code (inside global EC) => Execution of 
// functions and waiting for callbacks to be executed
// Whats inside execution context => 1. Variable Environment --> let, var, const declaration : --> Functions --> arguments object
// 2. Scope chain 
// 3. this keyword 
// => Generally during "creation phase", right before execution 


////////////////////////////////////////////////////////////////////////////////////////////
// Lec No : 92 Scope (scoping) and Scope Chain
// Scoping : How our program's variables are organised and accessed  by the JS engine. Scoping asks the question "Where do variables live?" or 
// "Where can we access a certain variables, and where not?". 
// Lexical Scoping : Scoping is controlled by placement of functions and blocks in the code;
// Scope: Space or environemt in ehich a certain variable is declared (variable environment in case of function).
// This is global Scope, function scope, and block scope.





////////////////////////////////////////////////////////////////////////////////////////////
// Time : 10:42 AM 2/2/2022 
//  Youtube : Namaste JavaScript // map, filter & reduce Functionns : Which are higjer order functions 
//  map function : Use to transform an array / Suppose we have an arrray here const arr = [5, 1, 3, 2, 6];
//    const arr = [5, 1, 3, 2, 6];
// now we want to transform it // Means suppose we want to double or tripple the value // or convert it into binary 
// here we use map function

///////////////////////////////////////////
// function double(x) {
//     return x * 2;
// }

// function tripple(x) {
//     return x * 3;
// }

// function binary(x) {
//     return x.toString(2);
// }

// const output = arr.map(binary); // We pass here double, thats why double  should be a function 
// console.log(output);
////////////////////////////////////////////////////////


// Now we want to triple the values // First create the function triple
// function tripple(x) {
//     return x * 3;
//                               }


//  For to convert binary 
// function binary(x){
//     return x.toString(2);
//                              }


// We can also write our code like this 

// const output = arr.map(function binary(x) {
//     return x.toString(2);
// });
// console.log(output);  // this syntax is totallly fine /// This is known as Highe rorder functions 
/////////////////////////////////////////////////////////////////////////////
//  Filter function 
// const arr = [5, 1, 3, 2, 6];
// filter odd values 
//  This code is for finding odd values 
// function isOdd(x) {
//     return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

//  Output is : (3) [5, 1, 3] 

//  Code for finding even numbers 
//  Now to find even values change the logic in function 

// const arr = [5, 1, 3, 2, 6];

// function isEven(x) {
//     return x % 2 === 0;
// }

// const output = arr.filter(isEven);
// console.log(output);


////////////////////////////////////// Write this by myself //////////////////////////////////////
// const arr = [2, 4, 5, 7, 8, 10, 500, 60, 67]

// function isEven(x) {
//     return x % 2 === 0; 
// }

// const output = arr.filter(isEven)
// console.log(output)

// output is (6) [2, 4, 8, 10, 500, 60]

////////////////////////////////////// Suppose we wanto filter out values great than 2 then //////////////////////////////////////
//  write function like // function greaterThan2 (x){
//     return x > 4;
// }

// const arr = [2, 4, 5, 7, 8, 10, 500, 60, 67]

// function greaterThan2(x) {
//     return x > 2;
// }

// const output = arr.filter(greaterThan2)
// console.log(output)

/////////Output is : [4, 5, 7, 8, 10, 500, 60, 67]
//  We can also write this function with the help of array function  
///////////////////////// ARROW FUNCTION /////////////////////////
// const arr = [2, 4, 5, 7, 8, 10, 500, 60, 67];
// const output = arr.filter((x) => x > 2);

// console.log(output);
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// reduce function /////////////////////////////