import './Header.css'
function Header(props){
    return (
        <div className="Header">
            <img src={props.imgStore} alt="Store's image" className="storeImgName" />
            <h1 className="storeName">{props.storeName}</h1>
            <h2 className="eventName">{props.eventName}</h2>
            <h3 className="eventDate">{props.eventDate}</h3>
        </div>
        
    );
}
export default Header;