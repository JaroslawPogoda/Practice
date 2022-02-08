import React,{useState} from "react";
import ContactForm from "./ContactForm/ContactForm"
import Contact from "./Contact/Contact";
export default function Content(props) {
    const [contactList,setContactList]= useState([])
    const getContact = (name,phone,email) => {
        setContactList((prevContactList)=>[...prevContactList,{name:name,phone:phone,email:email}])
        console.log(contactList)
    }
    return(
        <div className="ContentPage">
            <h1 className="ContentTitle">Hello this is content page</h1>
            <h3>press button to get info</h3>
            <ContactForm getContact={getContact}/>
            <div className="ContactList">
                {contactList.map((contact,index) => <Contact contact={contact} key={index}/>)}
            </div>
        </div>
    )

}