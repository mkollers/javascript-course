const fizzBuzz = require('../01_fizz_buzz');

describe('FizzBuzz', function () {
    for (const i of [3, 6, 9, 12, 18, 21]) {
        it(`Should return Fizz for ${i}`, () => {
            const output = fizzBuzz(i);
            expect(output).toEqual('Fizz');
        });
    }
    for (const i of [5, 10, 20, 25, 35, 40]) {
        it(`Should return Buzz for ${i}`, () => {
            const output = fizzBuzz(i);
            expect(output).toEqual('Buzz');
        });
    }
    for (const i of [15, 30, 45, 60, 75, 90]) {
        it(`Should return FizzBuzz for ${i}`, () => {
            const output = fizzBuzz(i);
            expect(output).toEqual('FizzBuzz');
        });
    }
    for (const i of [1, 2, 4, 7, 8, 11]) {
        it(`Should return the number for ${i}`, () => {
            const output = fizzBuzz(i);
            expect(output).toEqual(i);
        });
    }
});