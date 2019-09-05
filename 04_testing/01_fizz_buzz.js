/*
Write a program to print out the numbers 1 to 100. 

Then make the program print out the word ‘Fizz’ if the number that would be printed can 
be divided by 3 with no remainder. 

Make the program also print out the word ‘Buzz’ if the number is divisible by 5.

Make the program also print out the word ‘FizzBuzz’ if the number is divisible by both 3 ​and 
5. 

Below is an example of the expected output for the first 20 numbers: 

1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 
Buzz…  
*/  
module.exports = function fizzBuzz(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return 'FizzBuzz';
    } else if (i % 3 === 0) {
        return 'Fizz';
    } else if (i % 5 === 0) {
        return 'Buzz';
    } else {
        return i;
    }
}