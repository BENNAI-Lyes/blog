import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <div className="topbarsocialIcons">
          <i className="topbarsocialIcon fa-brands fa-facebook-square"></i>
          <i className="topbarsocialIcon fa-brands fa-twitter-square"></i>
          <i className="topbarsocialIcon fa-brands fa-instagram-square"></i>
          <i className="topbarsocialIcon fa-brands fa-pinterest-square"></i>
        </div>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <li className="topbarListItem">
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/write">
              write
            </Link>
          </li>
          <li className="topbarListItem">
            <Link className="link" to="/logout">
              logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="topbarRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topbarImg"
            />
          </Link>
        ) : (
          <ul className="topbarList">
            <li className="topbarListItem">
              <Link className="link" to="/login">
                login
              </Link>
            </li>
            <li className="topbarListItem">
              <Link className="link" to="/register">
                register
              </Link>
            </li>
          </ul>
        )}

        <i className="topbarSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
