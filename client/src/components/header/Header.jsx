import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <div className="headerTitleSm"> React & Node</div>
        <div className="headerTitleLg">Blog</div>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2016/02/18/15/19/new-life-1207327_960_720.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}
