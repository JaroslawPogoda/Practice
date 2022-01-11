import './Item.css'
function Item(props){
    return (
        <div className="Item">
            <h3 className="name">{props.name}</h3>
            <img src={props.img} alt="" className="img" />
            <p className="discountPrice">{props.discountPrice}</p>

        </div>
        
    );
}
export default Item;