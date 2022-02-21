import "./write.css";
import Topbar from "../../components/topbar/Topbar";

export default function Write() {
  return (
    <div className="write">
      <Topbar />
      <div className="writeContainer">
        <div className="writeImgContainer">
          <img
            src="https://images.unsplash.com/photo-1551290470-554bf3a4fa80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="writeImg"
          />
        </div>
        <form className="writeForm">
          <div className="formGroup">
            <label htmlFor="file">
              <i className="fileIcon fa-solid fa-plus"></i>
              <input
                id="file"
                type="file"
                className="formGroupInput"
                style={{ display: "none" }}
              />
            </label>
            <input
              type="text"
              className="formGroupInput"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
          <textarea
            className="formText"
            type="text"
            cols="30"
            rows="10"
            placeholder="Tell Your Story ..."
          ></textarea>
          <button className="publishForm" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
