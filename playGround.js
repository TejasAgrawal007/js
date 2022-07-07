// console.log("Hello Tejas Welcome Back to JS");

// // 2. Variables (var, let, const)
// name = "Tejas Agrawal"
// console.log(name);


// 3. Comments
// This is a Comments


//4.  Operators
// food = 20;
// tipPercentage = 0.2;
// tipAmount = food * tipPercentage
// console.log(tipAmount);


//5. Uper Input
// food = Number(prompt("Enter Your Fruit Price: "));
// tipPercentage = Number(prompt("tip %"))/100;
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log(total);
// console.log(tipAmount);



/* data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
*/

// Random
// result = Math.floor(Math.random() * 10);
// console.log(result);


// Baby Weather App (Conditionals)
/*
    if rain 👉 "Grab Your Umbrella ☔"
    else 👉 "Wear Your Sunglasses 😎"
*/


// let weather = "rain"; / prompt("How is Your weather? ")
// if (weather == "rain") {
//     console.log("Grab Your Umbrella ☔");
// } else {
//     console.log("Wear Your Sunglasses 😎");
// }



// Functions

/*This is aFunction say my Name with no or 0 argument*/

// function sayMyName() {
//     console.log("Tejas Agrawal");
//     console.log("Siya Bankar");
// }

// sayMyName()

/*This is a Function saymyName with 1  argument
does: It log your Name.*/
// Dynamic
// function sayMyName(name){
//     console.log(name);
// }

// sayMyName("Tejas Agrawal")

// function greeting(name) {
//     // Template literals
//     console.log(`Hi,${name} Nice To Meet You!`);
// }

// greeting("Tejas");


// Multiple Arguments

// function sum(a, b) {
//     return a + b
// }

// result = sum(10, 20)
// console.log(result);


// Using a Function
// result = sum(10,30);
// console.log("The Result is",result);

/*
function calculateFoodTotalAmount(food, tip) {

    const tipPercentage = tip / 100;
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    return total
} */

// console.log(calculateFoodTotalAmount(300, 20));


// ES6 Way -> (Arrow Function)

// Arrow function with explicate return.

// const sumArro = (a, b) => {
//     return a + b
// }

// Arrow function with implicate return. / Remove Curly braces.
// const sumArrow = (a, b) => a + b
// console.log(sumArrow(50, 10));


/*
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/


/* 1.
// function getSum(a,b){
//     return a + b
// }

// result = getSum(10,20);
// console.log("The Sum of Two Number is ", result);

const getSum = (a,b) => a + b;
result = getSum(10,20);
console.log("The Sum of Two Number is ", result);
*/


/* 2.
// function getSub(a,b){
//     return a - b;
// }
// result = getSub(20,10);
// console.log("The Sub of two Number is ", result);


const getSub = (a,b) => a - b;
result = getSub(20,10);
console.log("The Sub of two Number is ", result);
*/


/* 3.
// function getDiv(a,b){
//     return a / b;
// }

// result = getDiv(10,20);
// console.log("The Div of two Number is ",result);

const getDiv = (a,b) => a / b;
result = getDiv(10,20);
console.log("The Div of two Number is ",result);
*/

/* 4.
// function getMul(a,b){
//     return a * b;
// }

// result = getMul(10,20);
// console.log("The Muyltiplacation is", result);

// const getMul = (a,b) => a * b;
// result = getMul(10,20);
// console.log("The Multiplacation is", result);

*/


// Array's 😁


// const groceries = ["Banana", "Apple", "Pear", "Mangoes", "Cherry"]
// console.log(groceries);
// console.log(groceries[0]);
// console.log(groceries[1]);
// console.log(groceries[2]);


// Arrays Method



// groceries.push("Grapes")
// groceries.push("Chiku")




// Slice
// console.log(groceries.slice(0,2));
// console.log(groceries.slice(3,6));
// console.log(groceries.slice(1,4));


// indexOF
// console.log(groceries.indexOf("Apple"));

// length
// console.log(groceries.length);



// Object {}
/*
const person = {
    name: "Tejas",
    shirt: "White"
}

// console.log(person);
// console.log(person.name);

person.phone = '91-723-90187'
console.log(person);
// console.log(person.phone);
*/

// const person2 = {
//     name: "Siya",
//     aliveAt: "Aurangabad",
//     phone: "88-88-4539-92"
// }

// console.log(person2);
// console.log(person2.name);



// ES6 arrow function (2 arguments)
// object
// template literals
/*
const introducor = (name, aliveAt) => {
    const person = {
        name: name,
        aliveAt: aliveAt,
        assets: 100000,
        libility: 5000,
        netWorth: function () {
            return this.assets - this.libility;
        }
    }
    // const intro = `Hi My name is ${person.name}, & i am liveing at ${person.aliveAt} and my net worth is $${person.assets - person.libility}`;
    const intro = `Hi My name is ${person.name}, & i am liveing at ${person.aliveAt} and my net worth is $${person.netWorth()}`;
    return intro;
}

console.log(introducor("Tejas", "Nagpur"));
*/


// Loops




// const groceries = ["Banana", "Apple", "Pear", "Mangoes", "Cherry"]

// for (let i = 0; i < groceries.length; i++) {
//     console.log(i, groceries[i]);
// }

// for (const grocerie of groceries) {
//     console.log(grocerie);
// }


// const numbers = [1, 2, 3, 4, 5, 6]


// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// for(const number of numbers){
//     console.log(number);
// }

// Double The Number.
// for(const number of numbers){
//     console.log(number * 2);
// }


// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number * 2);
//     }
//     return result;
// }

// console.log(double([1, 2, 3, 4, 5]));


// Square Number.
// const double = (numbers) => {
//     let result = []
//     for (const number of numbers) {
//         result.push(number ** 2);
//     }
//     return result;
// }

// console.log(double([1, 2, 3, 4, 5]));


// letterCounter

// const letterConter = () => {
//     const phrase = "Hey can you go to grocery store with me?"


/*
    if we use in it means - Index
    if we use of it means - actual value.

*/

//     for (const letter in phrase) {
//         console.log(Number(letter)+1);
//     }
// }

// letterConter();


// const sumArrry = (numbers) => {
//     let result = 0;

//     for (const number of numbers) {
//         console.log(number);
//     }
//     return { result };
// }
// const nums = [1, 2, 3, 4];
// console.log(sumArrry(nums));



// // Array Methods
// Map
// Filter
// Reduce


// 1. Map - Loops and return an array.

// Implicate return
// [1, 2, 3, 4].map(number => console.log(number));

// Double This number

// let result = [1, 2, 3, 4].map(number => number * 2);
// console.log(result);

// const doubleMap = (number) => {
//     return number.map(number => number * 2);
// }

// console.log(doubleMap([1, 3, 5]));


// 2. Filter -loop and return an array with matching conditions

// const filter = (numbers, greaterThan) => {
//     let result = [];
//     for (const number of numbers) {
//         if (number > greaterThan) {
//             result.push(number);
//         }
//     }
//     return result;
// }
// console.log(filter([1, 2, 3, 4, 5, 6], 3));


// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.filter(num => num > 2))


// const actors = [
//     {name: "Jhonny", netWorth:200000000},
//     {name: "Amber", netWorth:10},
//     {name: "Tejas", netWorth:1000000000000},
//     {name: "Siya", netWorth:10000000000},
//     {name: "Param", netWorth:1000},
//     {name: "Yash", netWorth:1000000000},
// ];

// let result = actors.filter(actor => actor.netWorth > 10);

// let names = result.map(actor => actor.name).join(", ");
// console.log(names);


// document.innerHTML = `<h1>${result[0].name}</h1>`




// Reduce - sum of ...

// Sum of all netWorth
// SUM: Think Reduce
// Reduce takes an function as a arguments.
// Reduce loops and give you back a accumulator.



// const nums = [1, 2, 3, 4, 5]
// const result = nums.reduce(function (pre, curr){
//     return pre + curr;
// })

// const result = nums.reduce((pre, curr) => pre + curr);
// console.log(result);

// Reduce Multiply

// const result = nums.reduce((pre, curr) => pre * curr);
// console.log(result);



// Dom Manuplation


// let message = "We are the Best Programmer!";


// let coder = document.getElementById("title");
// console.log("Before: ", coder.innerText);
// title.innerText = message;
// console.log("After: ", coder.innerText);

// title.innerHTML = `<p>Hello ${message}</p>`
// title.style.color = "red";

// console.log('hello')

// let titleDiv = document.getElementById('title')

// console.log('before: ', titleDiv.innerText)

// let message = 'Square Color Counter 🚀'

// titleDiv.innerText = message;

// console.log('after: ', titleDiv.innerText)

// titleDiv.innerHTML = `<p>${message}</p>`

// titleDiv.style.backgroundColor = 'blue'

// const squares = document.querySelectorAll('.colorSquare')

// // forEach
// const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
// squares.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value] += 1
//         square.innerText = timesClicked[square.value]
//     }
// })
// function clearScores() {
//     timesClicked.red = 0
//     timesClicked.yellow = 0
//     timesClicked.green = 0
//     squares.forEach(square => {
//         square.innerText = ''
//     })
// }

// const clearGameBtn = document.getElementById('clear-game')
// clearGameBtn.onclick = () => clearScores()



// Tip Calculator


/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

/*
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberofPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");



// Get number of people from number of people div
let numberOfPeople = Number(numberofPeopleDiv.innerText);


// ** Calculate the total bill per person **
const calculateBill = () => {
    // console.log(numberOfPeople);
    // console.log(billInput.value);
    // get bill from user input & convert it into a number
    const bill = Number(billInput.value);
    console.log(bill);

    // get the tip from user & convert it into a percentage (divide by 100)
    const tipPercentage = Number(tipInput.value) / 100;
    // console.log(tipPercentage);

    // get the total tip amount
    const tipAmount = bill * tipPercentage;
    console.log({ tipAmount });


    // calculate the total (tip amount + bill)
    const total = tipAmount + bill;
    console.log(total);


    // calculate the per person total (total divided by number of people)
    const perPersonTotal = total / numberOfPeople
    console.log({ perPersonTotal });

    // update the perPersonTotal on DOM & show it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1;

    // update the DOM with the new number of people
    numberofPeopleDiv.innerText = numberOfPeople;

    // calculate the bill based on the new number of people
    calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (numberOfPeople <= 1) {
        alert("Hey! You can't go Less Than 1%");
        return;
    }

    // decrement the amount of people
    numberOfPeople -= 1;


    // update the DOM with the new number of people
    numberofPeopleDiv.innerText = numberOfPeople;


    // calculate the bill based on the new number of people
    calculateBill();
}

*/


// Practice

// const randomFruits = (fruits) => {
//     const randomNumber = Math.floor(Math.random() * fruits.length);
//     return fruits[randomNumber];
// }

// fruits = ["Apple", "Banana", "Cherry", "DrumStick"];
// console.log(randomFruits(fruits));





