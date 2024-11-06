"use strict";
const sumArray = (numbers) => {
    let sumOfNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfNumbers += numbers[i];
    }
    return sumOfNumbers;
};
const numbers = [1, 3];
const sum = sumArray(numbers);
// console.log(sum);
