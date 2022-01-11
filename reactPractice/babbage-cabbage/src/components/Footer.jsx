import './Footer.css'
function Footer(props){
    return (
        <div className="Footer">
            <h1 className="storeHours">{props.storeHours}</h1>
            <h1 className="storeLocation">{props.storeLocation}</h1>
            <h1 className="telephone">{props.telephone}</h1>
        </div>
        
    );
}
export default Footer;