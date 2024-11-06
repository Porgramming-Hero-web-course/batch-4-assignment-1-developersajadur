{



const countWordOccurrences = (sentence : string, word: string): number => {
    const lowerCaseWord = word.toLowerCase()
    const words = sentence.toLowerCase().split(" ")
    let count = 0;
    words.forEach(item => {
        if(item === lowerCaseWord){
            count++
        }
    })
    return count
}

const result = countWordOccurrences("TypeScript is great. I love TypeScript !", "typescript")

console.log(result)


}