import '../style/Contact.css'
function Contact(props){
    
    return (
        <div className="Contact">
            <img src={props.contact.picture.large} alt="Contact Face" className="ContactImage" />
            <h1 className="ContactName">{props.contact.name.first} {props.contact.name.last}</h1>
            <div className="ContactArrow">{">"}</div>
            <h2 className="homephoneNumber">Home: {props.contact.phone}</h2>
            <h2 className="cellphoneNumber">Mobile: {props.contact.cell}</h2>
            <h3></h3>
        </div>
    );
}

export default Contact;