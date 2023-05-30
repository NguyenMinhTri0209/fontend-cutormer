import { render } from "@testing-library/react";
import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="form-box">
          <h1>ĐĂNG NHẬP</h1>
          <form>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Mật khẩu" />
              </div>
              <p>
                Quên mật khẩu <a href="#">nhấn vào đây!</a>
              </p>
              <div className="btn-field">
                <button type="button">Đăng nhập</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
