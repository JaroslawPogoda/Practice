let somethingArray=[['this', 'that','third'],['1','2','3'],["good",'bad','awsome']]
function thisIsMyFirstCallBack(someArray){
    
    someArray.map(innerArray=>{ document.getElementById("div1").innerHTML+=`<tr>`
        innerArray.map(element=>document.getElementById("div1").innerHTML+=`<td>element</td>`)
        document.getElementById("div1").innerHTML+=`</tr>`
    })
    document.getElementById("div1").innerHTML+=`</table>`
    }

