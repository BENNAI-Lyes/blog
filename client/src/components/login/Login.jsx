import "./login.css";
import Topbar from "../topbar/Topbar";

export default function Login() {
  return (
    <div className="login">
      <Topbar />
      <div className="loginWrapper">
        <h2 className="loginTitle">Login</h2>
        <form className="loginForm">
          <label htmlFor="email" className="loginFormLabel">
            Email
          </label>
          <input type="email" className="loginFormInput" />
          <label htmlFor="password" className="loginFormLabel">
            Password
          </label>
          <input type="password" className="loginFormInput" />
          <button className="loginSubmit" type="submit">
            Login
          </button>
        </form>
        <button className="loginRegisterButton">Register</button>
      </div>
    </div>
  );
}
