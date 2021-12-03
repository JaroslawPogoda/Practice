let text2= " this is the test text"
console.log(`Exercise 3`)
iterator=text2.length-1;
let test=""
while(iterator>=0)
{
    test += text2.charAt(iterator);
    iterator--;
}
console.log(test)