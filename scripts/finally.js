let promise = new Promise(function(success,failure){
    let random = Math.random()*2
    if(random < 1)
    setTimeout(() => success("result"),2000)
    else 
    setTimeout(() => failure ("reject"), 2000)
})

        promise
        .then(result => alert(result))
        .catch(error => alert(error))
        .finally(() => alert('promise ready')) 
        
        //so we will always get finally 
        // but the succes and failure will be random 

        //only works when in rejects
        promise.catch(message)


        //
        promise.finally(message)

