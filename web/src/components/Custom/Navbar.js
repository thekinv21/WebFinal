import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Clock from "../Clock/Clock";

const Navbar = (props) => {
  const { index } = props;

  const navigate = useNavigate();

  const quit = () => {
    navigate("/login");
  };

  const Subcribes = () => {
    navigate("/subcribes");
  };

  const Home = () => {
    navigate("/home");
  };

  const Rezervation = () => {
    navigate("/rezervation");
  };

  const Sahalar = () => {
    navigate("/sahalar");
  };

  const Information = () => {
    navigate("/datainformation");
  };

  return (
    <div className="full-navbar">
      <div className="first-navbar">
        <img
          className="flat"
          // src="https://www.designfreelogoonline.com/wp-content/uploads/2020/10/000668-soccer-02.png"
          src="https://www.kindpng.com/picc/m/152-1522405_usc-trojans-football-sport-logo-american-football-football.png"
          alt=""
        ></img>

        <ul className="ul-css">
          <li onClick={Home} className={index === "0" ? "btn active" : "btn"}>
            Home
          </li>
          <li
            onClick={Subcribes}
            className={index === "1" ? "btn active" : "btn"}
          >
            Subcribes
          </li>
          <li
            onClick={Sahalar}
            className={index === "3" ? "btn active" : "btn"}
          >
            Subscribed Stadiums
          </li>
          <li
            onClick={Information}
            className={index === "4" ? "btn active" : "btn"}
          >
            İnformation
          </li>
          <li
            onClick={Rezervation}
            className={index === "2" ? "btn active" : "btn"}
          >
            Rezervation
          </li>

          <Clock></Clock>
        </ul>
      </div>

      <div className="second-navbar">
        <li onClick={quit} className="quit-btn">
          Quit
        </li>
      </div>
    </div>
  );
};

export default Navbar;
