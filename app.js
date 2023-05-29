// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
    return sum;
    }

arraySum(numbers)

let arr1 = []



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "The Hobbit by J.R.R Tolkien";
book.pages = 295;
book.readCount = 3;

book.info = function(x){
    return `${x.title}, ${x.pages}, ${x.readCount}`
};

console.log(book.info(book));


// Exercise 3 Section

let sentence = "The quick brown fox jumps over the lazy dog";

function reverseString (str){

let words = sentence.split(" ");
let answer = []

for (let i = 0; i < words.length; i++) {
    let reverseWord = words[i].split("").reverse().join("");
    answer.push(reverseWord)
}

let reversedSentence = answer.join(" ");
console.log(reversedSentence);
return reversedSentence
}

reverseString (sentence);

// Exercise 4 Section

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rowSplit = csvData.split('\n');
let strHeaders = rowSplit[0].split(',');
let hobbitArr = [];

for (let i = 1; i < rowSplit.length; i++) {
    let objSplit = rowSplit[i].split(',');
    let obj = {}
    obj[strHeaders[0]] = objSplit[0]
    obj[strHeaders[1]] = objSplit[1]
    hobbitArr.push(obj)
}

console.log(hobbitArr);