import React,{useState} from "react";

export default function Contact(props) {
    return(
        <div className="Contact">
            <h2 className="Contact-Name">{props.contact.name}</h2>
            <h3 className="Contact-phone">{props.contact.phone}</h3>
            <h3 className="Contact-Email">{props.contact.email}</h3>
        </div>
    )

}