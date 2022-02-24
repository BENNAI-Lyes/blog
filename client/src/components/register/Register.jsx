import "./register.css";
import Topbar from "../topbar/Topbar";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { isFetching } = useContext(Context);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = { username, email, password };
      const res = await axios.post("/api/auth/register", user);
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="register">
      <Topbar />
      <div className="registerWrapper">
        <h2 className="registerTitle">Register</h2>
        <form className="registerForm" onSubmit={handelSubmit}>
          <label htmlFor="username" className="registerFormLabel">
            Username
          </label>
          <input
            type="text"
            className="registerFormInput"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email" className="registerFormLabel">
            Email
          </label>
          <input
            type="email"
            className="registerFormInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="registerFormLabel">
            Password
          </label>
          <input
            type="password"
            className="registerFormInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="registerSubmit"
            type="submit"
            disabled={isFetching}
          >
            register
          </button>
          {error && <span className="loginError">Some thing went wrong</span>}
        </form>
        <button className="registerLoginButton" disabled={isFetching}>
          <Link className="link" to="/login">
            login
          </Link>
        </button>
      </div>
    </div>
  );
}
