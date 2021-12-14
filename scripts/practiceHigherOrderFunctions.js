const getSquares = (inputArr)=>inputArr.map(num =>{ return num*num})

let array = [1,2,3,4,5,6]
console.log(getSquares(array))
//Exercise #1
//Using filter create one function that only returns the 
// even numbers of an array
// Now write a function that returns only the odds
const onlyEvenNumbers = array=> array.filter(num => num%2==0)
console.log(onlyEvenNumbers(array))
//Exercise #2
// Write a function using .filter(), that takes in an array
// of numbers and returns an array of only numbers that are divisible
// by 6
let testString= "this is test string should retrun only numbers those numbers are 1 2 6 3 4 24 5 1 2 and 2 "
const numbersOnlyElembent= stringArray=>stringArray.split(" ").filter(num=> Number(num)%6===0).join(" ")
console.log(numbersOnlyElembent(testString))
// Exercise #3
// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('iced tea') // => "ICED TEA"
const capitalize = stringInput=>stringInput.split(" ").map(word => word.toUpperCase()).join(" ")
console.log(capitalize(testString));

// Exercise# 4
// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey everyone, lets study together saturday') // => "HEY everyone, LETS study TOGETHER saturday"
// let swapCase = function(string){
     // Codeeeee
//   }
const swapCase = inputString=> inputString.split(" ").map((arrayElement,index)=>
    index%2==0? capitalize(arrayElement):arrayElement
).join(" ")
console.log(swapCase(testString))
//Exercise #5
// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
// const shiftLetters = function(string){
    // code!
//   }
const shiftLetters = stringInput=> stringInput.split("").map( charater=>String.fromCharCode(charater.charCodeAt()+1)).join("")
console.log(shiftLetters(testString))
//using the .filter(), filter out the Full Stack residents 

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];
const filterOnlyFullStackreidents= inputArray=> inputArray.filter(objectElement=> objectElement.role==="Full Stack Resident")
console.log(filterOnlyFullStackreidents(users))
let [a,b,c,d]=['ga','fa','wa','as','vz']
console.log(a+b+c+d)