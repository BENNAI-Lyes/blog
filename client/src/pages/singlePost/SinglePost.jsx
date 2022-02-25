import "./singlePost.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const PF = "http://localhost:8000/images/";
  const { user } = useContext(Context);
  const [post, setPost] = useState({});
  const [updatedMode, setUpdatedMode] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDesc, setUpdatedDesc] = useState("");

  const postId = useParams().postId;

  //fetch a single post
  useEffect(() => {
    try {
      const getPost = async () => {
        const res = await axios.get("/api/post/" + postId);
        setPost(res.data);
        setUpdatedTitle(res.data.title);
        setUpdatedDesc(res.data.desc);
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

  const handelUpdate = () => {
    setUpdatedMode(true);
  };

  const handelSaveUpdate = async () => {
    try {
      await axios.put("/api/post/" + postId, {
        username: user.username,
        title: updatedTitle,
        desc: updatedDesc,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const cancelUpdate = () => {
    setUpdatedMode(false);
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
            {updatedMode ? (
              <input
                type="text"
                value={updatedTitle}
                className="singlePostTitleUpdate"
                onChange={(e) => setUpdatedTitle(e.target.value)}
                autoFocus={true}
              />
            ) : (
              <h2 className="singlePostTitle"> {post.title} </h2>
            )}
            {post.username === user.username && !updatedMode && (
              <div className="singlePostIcons">
                <i
                  className="singlePostIcon fa-solid fa-pen-to-square"
                  onClick={handelUpdate}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handelDelete}
                ></i>
              </div>
            )}
            {updatedMode && (
              <i
                className="singlePostIcon fa-solid fa-xmark"
                onClick={cancelUpdate}
              ></i>
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
          {updatedMode ? (
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="singlePostTextUpdated"
              value={updatedDesc}
              onChange={(e) => setUpdatedDesc(e.target.value)}
            ></textarea>
          ) : (
            <div className="singlePostText"> {post.desc} </div>
          )}
          {updatedMode && (
            <button className="updatePost" onClick={handelSaveUpdate}>
              Update
            </button>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
