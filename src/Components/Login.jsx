import React from "react";
import helloimg from "../Assets/helloimg.svg";
import "../Style/Login.css";

function Login() {
  return (
    <div className="auth-container">
      <div className="Image-Container">
        <img className="Img" src={helloimg} alt="helloimg" />
        <div className="Para">
          <p className="paragraph">
            Access your account and take advantage of our platform's features.
          </p>
        </div>
      </div>
      <div className="auth-box">
        <h2>Login</h2>
        <form className="form">
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
          <p className="switch-page">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
