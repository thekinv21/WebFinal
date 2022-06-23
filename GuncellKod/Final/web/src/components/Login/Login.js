import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import SuperAdmins, { Users } from "./Data";

const Login = () => {
  const Bildirim = () => {
    alert("Kullanıcı Adi veya Şifre Yanliş");
  };

  const navigate = useNavigate();

  const [AdminUser, setAdminUser] = useState();
  const [AdminPassword, setAdminPassword] = useState();

  const log_click = (e) => {
    e.preventDefault();

    var admin = SuperAdmins.find(
      (value) =>
        AdminUser === value.Admin_Username &&
        AdminPassword === value.Admin_Password
    );
    if (admin) {
      navigate("/admin");
    } else {
      var user = Users.find(
        (user) =>
          AdminUser === user.User_Username &&
          AdminPassword === user.User_Password
      );
      if(user){
        navigate("/home")
      }
      else{
        Bildirim();
      }
    }
  };

  return (
    <div className="login-full-page">
      <form className="form">
        <div className="log-title">
          <img
            className="flat-logo"
            src="https://www.kindpng.com/picc/m/235-2351000_login-icon-png-transparent-png.png"
            alt=""
          ></img>
        </div>

        <div className="first-page">
          <div className="space"></div>
          <div className="space"></div>

          <label className="baslik"> Username </label>
          <input
            className="Text_css"
            type="text"
            onChange={(e) => setAdminUser(e.target.value)}
            autoComplete="off"
            maxLength={12}
            required="required"
          ></input>
          <div className="space"></div>
          <label className="baslik"> Password </label>
          <input
            className="Text_css"
            type="password"
            onChange={(e) => setAdminPassword(e.target.value)}
            autoComplete="off"
            required="required"
          ></input>
        </div>

        <div className="second-page">
          <button className="log-button" onClick={log_click}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
