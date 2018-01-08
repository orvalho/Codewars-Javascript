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


