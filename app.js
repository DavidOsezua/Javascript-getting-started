/* QUESTION-1.
Print a box like the one below.
*******************
*******************
*******************
*******************
*/

// SOLUTION
// console.log("*********************");
// console.log("*********************");
// console.log("*********************");
// console.log("*********************");

/* QUESTION-2. 
Print a box like the one below.
*******************
*                 *
*                 *
*******************
*/

// SOLUTION
// console.log("*************************");
// console.log("*", "                     ", "*");
// console.log("*", "                     ", "*");
// console.log("*************************");

/* QUESTION-3. 
Print a triangle like the one below.
*
**
***
****
*/

// SOLUTION
// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");

/* QURSTION-4. 
Ask the user to enter a number. Print out the square of the number.
*/

// SOLUTION
// let num = prompt("enter a number:");
// let square = num * num;
// console.log("The square of a number is: " + square);

/* QUESTION-5.
Write a program that computes and prints the result of 512 − 282 / 47 · 48 + 5
. It is roughly .1017.
*/

//SOLUTION
// console.log((512 - 282) / (47.48 + 5));

/* QUESTION 6.
Write a program that asks the user for a weight in kilograms and converts it to pounds. There
are 2.2 pounds in a kilogram*/

//SOLUTION
// let inKilo = prompt("enter a weight in kg:");
// let inPounds = inKilo * 2.2;
// console.log(inPounds + "pounds");

/* QUESTION 7. 
Write a program that asks the user to enter three numbers (use three separate input statements). Create variables called total and average that hold the sum and average of the
three numbers and print out the values of total and average*/

// SOLUTION
// let x = prompt("enter a number");
// let y = prompt("enter a number");
// let z = prompt("enter a number");
// x = parseInt(x);
// y = parseInt(y);
// z = parseInt(z);
// let sum = x + y + z;
// let avg = sum / 2;
// console.log(sum, avg);

/* QUESTION 8.
  A lot of cell phones have tip calculators. Write one. Ask the user for the price of the meal and
the percent tip they want to leave. Then print both the tip amount and the total bill with the
tip included.*/

// SOLUTION
// let priceMeal = prompt("enter a price of meal");
// let tipPercentage = prompt("enter tip percentage");
// priceMeal = parseInt(priceMeal);
// tipPercentage = parseInt(tipPercentage);
// let tipAmount = (priceMeal * tipPercentage) / 100;
// let totalBill = priceMeal + tipAmount;
// console.log(totalBill);
