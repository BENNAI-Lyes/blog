import "./singlePost.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const [post, setPost] = useState({});
  const PF = "http://localhost:8000/images/";
  const { user } = useContext(Context);
  const postId = useParams().postId;

  //fetch a single post
  useEffect(() => {
    try {
      const getPost = async () => {
        const res = await axios.get("/api/post/" + postId);
        setPost(res.data);
      };
      getPost();
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const handelDelete = async () => {
    try {
      await axios.delete("/api/post/" + postId, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="singlePost">
      <Topbar />
      <div className="singlePostFeed">
        <div className="singlePostContent">
          {post.img && (
            <img className="singlePostImg" src={PF + post.img} alt="" />
          )}
          <div className="singlePostTitleContainer">
            <h2 className="singlePostTitle"> {post.title} </h2>
            {post.username === user.username && (
              <div className="singlePostIcons">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handelDelete}
                ></i>
              </div>
            )}
          </div>
          <div className="singlePostInfo">
            <div className="singlePostInfoLeft">
              <b>Author</b>:{" "}
              <Link
                to={`/?username=${post.username}`}
                className="link"
                style={{ cursor: "pointer" }}
              >
                {post.username}
              </Link>
            </div>
            <div className="singlePostInfoRight">
              {new Date(post.createdAt).toDateString()}{" "}
            </div>
          </div>
          <div className="singlePostText"> {post.desc} </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
