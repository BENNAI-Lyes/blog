import "./topbar.css";

export default function Topbar() {
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
          <li className="topbarListItem">home</li>
          <li className="topbarListItem">about</li>
          <li className="topbarListItem">contact</li>
          <li className="topbarListItem">write</li>
          <li className="topbarListItem">logout</li>
        </ul>
      </div>
      <div className="topbarRight">
        <img
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="topbarImg"
        />
        <i className="topbarSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
