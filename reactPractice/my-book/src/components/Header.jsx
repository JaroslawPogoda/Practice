import "./Header.css";
function Header(props) {
  return (
    <div className="header">
      <h2 className="title">{props.pageTitle}</h2>
      <ul className="ulList">
        <li className="listItem">
          <a href="#">
            <h2>Home</h2>
          </a>
        </li>
        <li className="listItem">
          <a href="#">
            <h2>Books</h2>
          </a>
        </li>
        <li className="listItem">
          <a href="#">
            <h2>About</h2>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
