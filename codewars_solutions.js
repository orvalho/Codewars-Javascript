//1.Even or Odd

/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}



//2.Opposite number

/*
Very simple, given a number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
But can you do it in 1 line of code and without any conditionals?
*/

function opposite(number) {
  return -number;
}



//3.Area of a Square (Easy)

/*
Write the function squareArea(A) (square_area($A) in PHP) that finds the area of the red square when you have
the length of the circular arc A (1/4 of circle perimeter).
Use π = Math.PI (M_PI in PHP)
Round to two decimals.
*/

function squareArea(A) {
  r = A * 4 / 2 / Math.PI; // 4 * A = 2*pi*r
  area = Math.pow(r, 2); // square area
  area = area.toFixed(2); // round to two decimal places
  return parseFloat(area); // parse a string and returns a number
}



//4.Calculate Price Excluding VAT

/*
Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1
*/

//return price without vat
function excludingVatPrice(price) {
  return price === null ? -1 : Number((price/1.15).toFixed(2));
 }

