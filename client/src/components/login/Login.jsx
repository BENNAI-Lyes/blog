import "./login.css";
import Topbar from "../topbar/Topbar";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { login } from "../../apiCalls";
import { Context } from "../../context/Context";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { dispatch, isFetching, user } = useContext(Context);

  const handelSubmit = (e) => {
    e.preventDefault();

    login(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <Topbar />
      <div className="loginWrapper">
        <h2 className="loginTitle">Login</h2>
        <form className="loginForm" onSubmit={handelSubmit}>
          <label htmlFor="email" className="loginFormLabel">
            Email
          </label>
          <input type="email" className="loginFormInput" ref={email} />
          <label htmlFor="password" className="loginFormLabel">
            Password
          </label>
          <input type="password" className="loginFormInput" ref={password} />
          <button className="loginSubmit" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="loginRegisterButton" disabled={isFetching}>
          <Link className="link" to="/register">
            register
          </Link>
        </button>
      </div>
    </div>
  );
}
