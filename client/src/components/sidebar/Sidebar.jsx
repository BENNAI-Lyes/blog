import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarItemTitle">About Me</div>
        <img
          src="https://images.unsplash.com/photo-1496827779898-37fde9f89dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBsYW50JTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="sidebarImg"
        />
        <p className="sidebarDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit, Perspiciatis
          tempora sequi ipsum nihil eligendi.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarItemTitle">Category</div>
        <ul className="sidebarCategoryList">
          <li className="sidebarCategoryItem">Life</li>
          <li className="sidebarCategoryItem">Style</li>
          <li className="sidebarCategoryItem">Music</li>
          <li className="sidebarCategoryItem">Tech</li>
          <li className="sidebarCategoryItem">Cinema</li>
          <li className="sidebarCategoryItem">Sport</li>
        </ul>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">Follow Us</div>
          <div className="sidebarSocialList">
            <i className="sidebarSocialIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarSocialIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarSocialIcon fa-brands fa-instagram-square"></i>
            <i className="sidebarSocialIcon fa-brands fa-pinterest-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
