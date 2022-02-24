import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:8000/images/";
  return (
    <div className="post">
      {post.img && <img src={PF + post.img} alt="" className="postImg" />}

      <div className="postCats">
        {post.category.map((cat) => (
          <Link to={`/?category=${cat}`} className="link postCat" key={cat}>
            {cat}
          </Link>
        ))}
      </div>
      <Link className="link" to={`post/${post._id}`}>
        <div className="postTitle">{post.title}</div>
      </Link>
      <div className="postDate">{new Date(post.createdAt).toDateString()}</div>
      <div className="postText">{post.desc}</div>
    </div>
  );
}
