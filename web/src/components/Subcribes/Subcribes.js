import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Custom/Navbar";
import "./Subcribes.css";

const Subcribes = () => {
  //bİLDİRİM FONKSYONU//
  const myAlert = () => {
    alert("Abone Rezervasyonu Tamamlandı");
  };

  const navigate = useNavigate();

  const [state, setState] = useState({
    //Multiple degiştimek için name tanımlama ona göre değiştir //

    subName: "",
    subAge: "",
    subTc: "",
    subTel: "",
    subEmail: "",
    subResidence: "",
    subStadium: "",
    subPeriod: "",
  });

  // multiple inputs change function //
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value, //name e göre değiştirir, Eğer namedeki adı 
    });                           //aynı yazılmaz ise consola yazmaz yabi hata olur
  };

  //liste oluşturup içine de verileri ekledim localeStorage eklemek için//
  const Listem = {
    name: state.subName,
    age: state.subAge,
    tc: state.subTc,
    tel: state.subTel,
    email: state.subEmail,
    city: state.subResidence,
    stadium: state.subStadium,
    subcribe: state.subPeriod,
  };

  //lİSTEM elemanlarını localestoraga ekledim//
  localStorage.setItem("Subcribes", JSON.stringify(Listem));

  //BUTONA TIKLANDIĞINDA GERÇEKLEŞECEK EVENT//
  const onSahalara = () => {
    myAlert();
    navigate("/sahalar");
    // console.log("\n")
    // console.log("Name : ", state.subName)
    // console.log("Age  : ", state.subAge);
    // console.log("Tc    : ", state.subTc);
    // console.log("Tel   : ", state.subTel);
    // console.log("Email : ", state.subEmail);
    // console.log("city  : ", state.subResidence);
    // console.log("Gender: ", state.subGender);
    // console.log("Month : ", state.subPeriod);
  };

  return (
    <div className="subcribes-full-page">
      <>
        <Navbar index="1" />
        <hr></hr>
      </>

      <div className="subcribes">
        <div className="subcribes-form">
          <div className="subcribes-half-page">
            <div className="subcribes-title">
              <h3>Subcribes Form</h3>
              <hr></hr>
            </div>

            <div className="rezervation-wrap">
              <div>
                <p className="p-title"> Name </p>
                <input
                  className="text"
                  type="text"
                  name="subName"
                  value={state.subName}
                  maxLength={12}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <p className="p-title"> Age </p>
                <input
                  className="text"
                  type="text"
                  name="subAge"
                  value={state.subAge}
                  maxLength={2}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <p className="p-title">Tc Number</p>
                <input
                  className="text"
                  name="subTc"
                  type="text"
                  value={state.subTc}
                  // type="text"
                  maxLength={12}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <p className="p-title">Telephone Number</p>
                <input
                  type="tel"
                  className="text"
                  name="subTel"
                  value={state.subTel}
                  maxLength={12}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <p className="p-title"> Email </p>
                <input
                  className="text"
                  type="email"
                  name="subEmail"
                  value={state.subEmail}
                  maxLength={20}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <p className="p-title">City ​​of Residence </p>
                <select
                  className="text"
                  name="subResidence"
                  value={state.subResidence}
                  onChange={handleChange}
                >
                  <option value=" "></option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Edirne">Edirne</option>
                  <option value="Adana">Adana</option>
                  <option value="Antalya">Antalya</option>
                  <option value="Kütahya">Kütahya</option>
                  <option value="Sivas">Sivas</option>
                  <option value="Tekirdağ">Tekirdağ</option>
                  <option value="Van">Van</option>
                  <option value="Trabzon">Trabzon</option>
                  <option value="Kayseri">Kayseri</option>
                </select>
              </div>
              <div>
                <p className="p-title"> Select Stadium </p>
                <select
                  className="text"
                  name="subStadium"
                  value={state.subStadium}
                  onChange={handleChange}
                >
                  <option value=" "></option>
                  <option value="Olimpia Halı Saha">Olimpia Halı Saha</option>
                  <option value="Esentepe Halı Saha">Esentepe Halı Saha</option>
                  <option value="Dinç Halı Saha">Dinç Halı Saha</option>
                  <option value="Show Halı Saha">Show Halı Saha</option>
                  <option value="Alpay Halı Saha">Alpay Halı Saha</option>
                  <option value="Marina Halı Saha">Marina Halı Saha</option>
                  <option value="Ömür Halı Saha">Ömür Halı Saha</option>
                  <option value="Deniz Çim Halı Saha">
                    Deniz Çim Halı Saha
                  </option>
                  <option value="ÇınaRAltı Halı Saha">
                    ÇinaRAltı Halı Saha
                  </option>
                  <option value="Deplasman Halı Saha">
                    Deplasman Halı Saha
                  </option>
                  <option value="Güneş Halı Saha">Güneş Halı Saha</option>
                  <option value="BayramOğlu Halı Saha">
                    BayramOğlu Halı Saha
                  </option>
                  <option value="Santra Halı Saha">Santra Halı Saha</option>
                </select>
              </div>
              <div>
                <p className="p-title"> Subscription Period </p>
                <select
                  className="text"
                  name="subPeriod"
                  value={state.subPeriod}
                  onChange={handleChange}
                >
                  <option></option>
                  <option value="1.month">1.month</option>
                  <option value="2.month">2.month</option>
                  <option value="3.month">3.month</option>
                  <option value="4.month">4.month</option>
                  <option value="5.month">5.month</option>
                  <option value="6.month">6.month</option>
                  <option value="7.month">7.month</option>
                  <option value="8.month">8.month</option>
                  <option value="9.month">9.month</option>
                  <option value="10.month">10.month</option>
                  <option value="11.month">11.month</option>
                  <option value="12.month">12.month</option>
                </select>
              </div>
            </div>
          </div>

          <div className="subcribes-second-page">
            <button className="rezer-save-btn" onClick={onSahalara}>
              Save
            </button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Subcribes;
