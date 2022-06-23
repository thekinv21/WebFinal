import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Navbar from "../Custom/Navbar";
import "./Rezervation.css";
import CreditCard from "../Odeme/CreditCard";

const Rezervation = () => {
  const navigate = useNavigate();

  const form = useRef();

  const [state, setState] = useState({
    //Multiple degiştimek için name tanımlama ona göre değiştir //

    rezName: "",
    // rezTc: "",
    rezTel: "",
    rezDate: "",
    rezStadium: "",
    rezTime: "",
    rezCard: "",
    rezCvc: "",
  });

  //Bilidirim Alrmı//
  const Alert = () => {
    alert("Reserved and sent Email");
  };

  // multiple inputs change function //
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, //name e göre değiştirir, Eğer namedeki adı aynı yazılmaz ise consola yazmaz yani hata olur//
    });
  };

  const RezervasyonList = {
    name: state.rezName,
    // tc: state.rezTc,
    tel: state.rezTel,
    date: state.rezDate,
    stadium: state.rezStadium,
    time: state.rezTime,
    card: state.rezCard,
    cvc: state.rezCvc,
  };

  //LocaleStorage Kaydetme//
  localStorage.setItem("Rezervation", JSON.stringify(RezervasyonList));

  const onHome = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_e8smogl", form.current, "h0_01OUsJP0FJjJrb")
      .then(
        (result) => {
          console.log("Notification Sent in Your Email");
        },
        (error) => {
          console.log("Try Again ");
        }
      );

    Alert();

    navigate("/home");
  };

  return (
    <div>
      <form ref={form}>
        <div className="rezer-full-page">
          <>
            <Navbar index="2" />
            <hr></hr>
          </>
          <div className="rezervation">
            <div className="rezervation-form">
              <div className="half-page">
                <div className="rezer-title">
                  <h3>Rezervation Form</h3>
                  <hr></hr>
                </div>
                <div className="rezervation-wrap">
                  <div>
                    <p className="p-title"> Name </p>
                    <input
                      className="text"
                      type="text"
                      name="rezName"
                      value={state.rezName}
                      maxLength={11}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div>
                    <p className="p-title">Email</p>
                    <input
                      className="text"
                      type="email"
                      name="name"
                      // name="rezTc"
                      value={state.rezTc}
                      maxLength={25}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div>
                    <p className="p-title">Telephone Number</p>
                    <input
                      className="text"
                      type="text"
                      name="rezTel"
                      value={state.rezTel}
                      maxLength={11}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                  <div>
                    <p className="p-title"> Select Date </p>
                    <input
                      className="text"
                      type="date"
                      name="rezDate"
                      autoComplete="off"
                      defaultValue={new Date().toLocaleDateString("fr-CA")}
                      // value={state.rezDate}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div>
                    <p className="p-title">Select Site</p>
                    <select
                      className="text"
                      name="rezStadium"
                      value={state.rezStadium}
                      onChange={handleChange}
                    >
                      <option value=""></option>
                      <option value="Olimpia Halı Saha">Olimpia Halı Saha</option>
                      <option value="Esentepe Halı Saha">Esentepe Halı Saha</option>
                      <option value="Esentepe Halı Saha">Barankaya Halı Saha</option>
                      <option value="Dinç Halı Saha">Dinç Halı Saha</option>
                      <option value="Show Halı Saha">Show Halı Saha</option>
                      <option value="Alpay Halı Saha">Alpay Halı Saha</option>
                      <option value="Marina Halı Saha">Marina Halı Saha</option>
                      <option value="Ömür Halı Saha">Ömür Halı Saha</option>
                      <option value="Deniz Çim Halı Saha">Deniz Çim Halı Saha</option>
                      <option value="ÇınaRAltı Halı Saha">ÇinaRAltı Halı Saha</option>
                      <option value="Deplasman Halı Saha">Deplasman Halı Saha</option>
                      <option value="Güneş Halı Saha">Güneş Halı Saha</option>
                      <option value="BayramOğlu Halı Saha">BayramOğlu Halı Saha</option>
                      <option value="Santra Halı Saha">Santra Halı Saha</option>
                    </select>
                  </div>
                  <div>
                    <p className="p-title">Select Time</p>
                    <select
                      className="text"
                      name="rezTime"
                      value={state.rezTime}
                      onChange={handleChange}
                    >
                      <option></option>
                      <option value="00:00 - 01:00">00:00 - 01:00</option>
                      <option value="01:00 - 02:00">01:00 - 02:00</option>
                      <option value="02:00 - 03:00">02:00 - 03:00</option>
                      <option value="03:00 - 04:00">03:00 - 04:00</option>
                      <option value="04:00 - 05:00">04:00 - 05:00</option>
                      <option value="05:00 - 06:00">05:00 - 06:00</option>
                      <option value="06:00 - 07:00">06:00 - 07:00</option>
                      <option value="07:00 - 08:00">07:00 - 08:00</option>
                      <option value="08:00 - 09:00">08:00 - 09:00</option>
                      <option value="09:00 - 10:00">09:00 - 10:00</option>
                      <option value="10:00 - 11:00">10:00 - 11:00</option>
                      <option value="11:00 - 12:00">11:00 - 12:00</option>
                      <option value="12:00 - 13:00">12:00 - 13:00</option>
                      <option value="13:00 - 14:00">13:00 - 14:00</option>
                      <option value="14:00 - 15:00">14:00 - 15:00</option>
                      <option value="15:00 - 16:00">15:00 - 16:00</option>
                      <option value="16:00 - 17:00">16:00 - 17:00</option>
                      <option value="17:00 - 18:00">17:00 - 18:00</option>
                      <option value="18:00 - 19:00">18:00 - 19:00</option>
                      <option value="19:00 - 20:00">19:00 - 20:00</option>
                      <option value="20:00 - 21:00">20:00 - 21:00</option>
                      <option value="21:00 - 22:00">21:00 - 22:00</option>
                      <option value="22:00 - 23:00">22:00 - 23:00</option>
                      <option value="23:00 - 00:00">23:00 - 00:00</option>
                    </select>
                  </div>
                  <div>
                    <CreditCard></CreditCard>
                  </div>
                </div>
              </div>
              <div className="rezer-second-page">
                <button className="rezer-save-btn" onClick={onHome}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Rezervation;
