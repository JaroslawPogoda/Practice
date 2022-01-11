import './Product.css';

function Product(props) {
  return (
    <div className="product">
      <h3 className="product-title">Product{props.title}</h3>
      <img className="product-image" src={props.imgurl}></img>
      <p className="product-discription">{props.description}</p>
    </div>
  );
}
export default Product;
