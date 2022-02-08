import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav>
      <h3 className="logo">Logo</h3>
      <ul className="nav-link">
        <Link to={"home"}>
          <li className="nav-item">Home</li>
        </Link>
        <Link to={"about"}>
          <li className="nav-item">About us</li>
        </Link>
        <Link to={"contact"}>
          <li className="nav-item">Contact us</li>
        </Link>
        <Link to={"content"}>
          <li className="nav-item">Content</li>
        </Link>
      </ul>
    </nav>
  );
}
