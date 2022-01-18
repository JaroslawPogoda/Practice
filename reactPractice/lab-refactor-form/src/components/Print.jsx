import React, {useState} from 'react'

function Print(props) {
    console.log(props.data)
    return(
        <div className="Print">
            <h3>{props.data.username}</h3>
        </div>
    )
}
export default Print;