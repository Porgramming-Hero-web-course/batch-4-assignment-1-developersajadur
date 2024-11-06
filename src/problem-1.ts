{



    const sumArray  = (numbers: number[]) : number => {
    let sumOfNumbers = 0;
    for(let i = 0; i < numbers.length; i++){
        sumOfNumbers += numbers[i]
    }
    return sumOfNumbers    
}

const numbers = [1, 2, 3, 4, 5]
const sum = sumArray(numbers)
// console.log(sum);





}