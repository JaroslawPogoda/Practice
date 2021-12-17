let promise = new Promise(function(resolve, reject) {
    setTimeout(()=>resolve("done"),2000)
})
console.log(promise)
promise.then((message) => console.log(message))