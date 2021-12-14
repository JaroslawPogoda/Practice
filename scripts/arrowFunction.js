// so function is
// function sum(num1, num2){
//     return total = num1 + num2;
// }
// console.log(sum(9, 7));
// const sum = (num1,num2) => num1 + num2;

// console.log(sum(9, 7));
// const greet = (fName= "Ada", lName="Lovelace") => console.log (` Hello ${fName} ${lName}`)
// greet()
// greet("Jaroslaw","Pogoda")
// Using only ES6 syntax, write a function for each question to accomplish the following (hint write clean code, use some of these functions as 'helper functions' in other answers):

// Logs a message saying 'Hello world'. Call the function.
const logHelloWorld = ()=> document.getElementById("solution1").innerHTML="Hello world";

// Takes a string and logs 'it is [STRING]'. Call the function with an arbitrary string.
const logString = (inputString)=> document.getElementById("solution2").innerHTML=`it is ${inputString}`;
// Takes a temperature and logs whether that temperature is hot (above 72) or cold (below 40). Call the function with an arbitrary temperature.
const logIfHotOrCold = (temperature=document.getElementById("textBoxInput").value) => {
    if( temperature>72) {
        document.getElementById("solution3").innerHTML=`it is hot at ${temperature}degrees`
        return "hot"
    }
    else if( temperature<4){
         document.getElementById('solution3').innerHTML=`it is cold at ${temperature}degrees`
         return "cold"
    }
    else {
        document.getElementById("solution3").innerHTML=`It is neither hot nor cold at ${temperature}degrees`
        return "neither hot nor cold"
    }
}
// Takes an array of temperatures and logs 'on day [number], it is [hot/cold]'. If it is neither hot or cold, the string should read 'today is a good day'. Call the function with an arbitrary array.
const evaluateTemperatures = (arrayTemperature,dayNumber) => {
    if(logIfHotOrCold(arrayTemperature[dayNumber-1])==="neither hot nor cold") document.getElementById("solution4").innerHTML = 'today is a good day'
    else document.getElementById("solution4").innerHTML =`it is ${logIfHotOrCold()}`
}