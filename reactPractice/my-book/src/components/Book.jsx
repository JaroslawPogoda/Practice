import "./Book.css";
function Book(props) {
  return (
    <div className="book">
      <h1 className="BookTitle">{props.title}</h1>
      <img src={props.imgurl} alt="" className="bookImage" />
      <p className="bookDescription">{props.description}</p>
    </div>
  );
}
export default Book;
