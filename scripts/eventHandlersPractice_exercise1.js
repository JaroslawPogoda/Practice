const changeHeading1 = (element,msg,color) => {
    element.innerHTML =msg
    element.style.color = color}
    const changeHeading2 = (element,displayOption,color) => {
        element.style.backgroundColor = color
        element.style.display = displayOption}
const changeHeading3 = (element,topElements,howManyRows)=>{
    element.innerHTML=`<table><tr>${drawTableTop(topElements.split(','))}</tr>
    ${drawTableRows(howManyRows,topElements)}</table>)}`
}
const drawTableTop = elementsToDraw=>{
    let returnString=""
    for(let i=0;i<elementsToDraw.length;i++){
        returnString+=`<th> ${elementsToDraw[i]} </th>`
    }
    console.log(returnString)
    return returnString
}
const drawTableRows = (numberOfRowsToDraw,columnsToDraw) =>  
{   let rows=""

    for(let i=Number(numberOfRowsToDraw);i>=0;i--){
       console.log(rows)

        rows+="<tr>"
        for(let j=columnsToDraw.split(',').length;j>0;j--)
            rows+=`<td>${(i*j)} </td>`
        rows+="</tr>\n"
    }
    return rows
    }