import "./write.css";
import Topbar from "../../components/topbar/Topbar";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.post("/api/post", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      <Topbar />
      <div className="writeContainer">
        {file && (
          <div className="writeImgContainer">
            <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
          </div>
        )}
        <form className="writeForm" onSubmit={handelSubmit}>
          <div className="formGroup">
            <label htmlFor="file">
              <i className="fileIcon fa-solid fa-plus"></i>
              <input
                id="file"
                type="file"
                className="formGroupInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <input
              type="text"
              className="formGroupInput"
              placeholder="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <textarea
            className="formText"
            type="text"
            cols="30"
            rows="10"
            placeholder="Tell Your Story ..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button className="publishForm" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
