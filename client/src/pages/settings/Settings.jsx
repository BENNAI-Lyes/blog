import "./settings.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const PF = "http://localhost:8000/images/";
  const { user, dispatch } = useContext(Context);

  const [file, setFile] = useState(null);
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const [success, setSuccess] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    dispatch({ type: "UPDATE_START" });

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);

      updatedUser.profilePicture = fileName;
      try {
        await axios.post("/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      const res = await axios.put("/api/user/" + user._id, {
        userId: user._id,
        ...updatedUser,
      });

      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setSuccess(true);
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE", payload: error });
      console.log(error);
    }
  };

  useEffect(() => {
    if (success)
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
  }, [success]);

  return (
    <div className="settings">
      <Topbar />
      <div className="settingsContainer">
        <div className="settingsContent">
          <div className="settingsTitleContainer">
            <h3 className="settingsTitle">Update Your Account</h3>
            <div className="deleteAccount">Delete Account</div>
          </div>
          <form className="profileInfo" onSubmit={handelSubmit}>
            <div className="profileInfoTop">
              <div className="settingsItem">
                <div className="settingsFormGroup">
                  <span className="settingsLabel">Profile Picture</span>
                  <span className="profilePictureContainer">
                    {file ? (
                      <img
                        src={URL.createObjectURL(file)}
                        alt=""
                        className="profileInfoImg"
                      />
                    ) : (
                      <img
                        src={
                          user.profilePicture
                            ? PF + user.profilePicture
                            : PF + "noAvatar.webp"
                        }
                        alt=""
                        className="profileInfoImg"
                      />
                    )}
                    <label>
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                      <i className="profileInfoImgIcon fa-solid fa-file-image"></i>
                    </label>
                  </span>
                </div>
              </div>
              <div className="settingsItem">
                <div className="settingsFormGroup">
                  <label htmlFor="username" className="settingLabel">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="settingInput"
                    ref={username}
                    placeholder={user.username}
                  />
                </div>
                <div className="settingsFormGroup">
                  <label htmlFor="email" className="settingLabel">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="settingInput"
                    ref={email}
                    placeholder={user.email}
                  />
                </div>
                <div className="settingsFormGroup">
                  <label htmlFor="password" className="settingLabel">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="settingInput"
                    ref={password}
                    placeholder="new password"
                  />
                </div>
              </div>
            </div>
            <button className="formUpdate" type="submit">
              Update
            </button>
          </form>
          {success && (
            <div className="success">Profile has been updated successfully</div>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
