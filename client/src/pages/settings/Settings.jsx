import "./settings.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <Topbar />
      <div className="settingsContainer">
        <div className="settingsContent">
          <div className="settingsTitleContainer">
            <h3 className="settingsTitle">Update Your Account</h3>
            <div className="deleteAccount">Delete Account</div>
          </div>
          <form className="profileInfo">
            <div className="profileInfoTop">
              <div className="settingsItem">
                <div className="settingsFormGroup">
                  <span className="settingsLabel">Profile Picture</span>
                  <span className="profilePictureContainer">
                    <img
                      src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt=""
                      className="profileInfoImg"
                    />
                    <label>
                      <input type="file" style={{ display: "none" }} />
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
                  <input type="text" id="username" className="settingInput" />
                </div>
                <div className="settingsFormGroup">
                  <label htmlFor="email" className="settingLabel">
                    Email
                  </label>
                  <input type="email" id="email" className="settingInput" />
                </div>
                <div className="settingsFormGroup">
                  <label htmlFor="password" className="settingLabel">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="settingInput"
                  />
                </div>
              </div>
            </div>
            <button className="formUpdate" type="submit">
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
