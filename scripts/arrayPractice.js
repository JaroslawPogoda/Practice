let colors = [`Purple`,`Siliver`, `Gold`, `Red`];
let food = [`pizza` , `Hamburger` , `Sweet Fries`, `Egg and cheese`];


let newArray = Array.from(Array(51).keys())
console.log(newArray)
// Testing all of them shift unshift join toString pop push length sort splice slice reverse
console.log(colors[2])
console.log(colors[1])
console.log(colors[4])
console.log(colors.length)// length of the array colors
console.log(colors.push('Green'));// appends at the end of the array colors returns length
console.log(colors.pop());// removes from the array last element and returns it.
console.log(colors.sort());// method to sort an array in descending order
// Shift adds to the front of the array
colors.shift("Blue")
console.log(`colors array after shift = ${colors}`)
// unshift removes from the front of the array 

colors.unshift()
console.log(`colors array after unshift = ${colors}`)
// array after join method 
let joinedArray= colors.join("*");
console.log(joinedArray);
let stringFromArray=joinedArray.toString();
console.log(`The array was turned to string using toSting() ${stringFromArray} and the stringFromArray is now a ${typeof stringFromArray}`);
console.log(`the colors.slice(1,2 ) retrun ${colors.slice(1,2)} and array remains the same ${colors}`)
console.log(`the food.splice(1,2 ) retrun ${food.splice(1,2, "pomegranade")} and array will be changed with pomegranade ${food}`)
console.log(`the contents of the food array will be reversed after food.reverse() is called ${food.reverse()}`)
