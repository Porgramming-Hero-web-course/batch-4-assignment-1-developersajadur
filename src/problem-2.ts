{

    
const removeDuplicates = (numbers : number[]) : number[] => {
 return numbers.filter((number, index) => {
    return numbers.indexOf(number) === index;
})
}

const numbers = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(numbers);
console.log(result);


}