import React,{useState} from "react";
import './ContactForm.css'
export default function Contact(props) {
    let [name,setName]=useState('')
    let [phoneNumber,setPhoneNumber]=useState('')
    let [email,setEmail]=useState('')
    
    const handleSubmit = event => {
        event.preventDefault();
        props.getContact(name,phoneNumber,email)
    }
    const handleChange = event => {
        if(event.target.id==='name')
            name=event.target.value
        
        else if(event.target.id==='phone')
            phoneNumber=event.target.value
        else
            email=event.target.value
    }
    return(
        <div className="ContactPage">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label-name">Name:</label>
                <input className="form-name" id="name" type="name" onChange={handleChange}/>
                <label htmlFor="phone" className="form-label-phone">Name:</label>
                <input className="form-phone" id="phone" type="phone" onChange={handleChange}/>
                <label htmlFor="email" className="form-label-email">Name:</label>
                <input className="form-email" id="email" type="email" onChange={handleChange}/>
                <button>Submit</button>
            </form>

        </div>
    )

}