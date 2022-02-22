import "./register.css";
import Topbar from "../topbar/Topbar";
import { Link } from "react-router-dom";

export default function register() {
  return (
    <div className="register">
      <Topbar />
      <div className="registerWrapper">
        <h2 className="registerTitle">Register</h2>
        <form className="registerForm">
          <label htmlFor="username" className="registerFormLabel">
            Username
          </label>
          <input type="email" className="registerFormInput" />
          <label htmlFor="email" className="registerFormLabel">
            Email
          </label>
          <input type="email" className="registerFormInput" />
          <label htmlFor="password" className="registerFormLabel">
            Password
          </label>
          <input type="password" className="registerFormInput" />
          <button className="registerSubmit" type="submit">
            register
          </button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">
            login
          </Link>
        </button>
      </div>
    </div>
  );
}
