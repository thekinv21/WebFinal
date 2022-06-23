import React from "react";
import "./Home.css";
import Navbar from "../Custom/Navbar";
import { useNavigate } from "react-router-dom";


const Home = () => {

  const navigate = useNavigate();


  const onSubcribe = () => {

    navigate("/subcribes");
  }

  const onRezervation  = () => {

    navigate("/sahalar");
  }


  return (
    <div>
      <>
        <Navbar index="0" />
      </>

      <div className="home-full-page">
        <>
          <hr></hr>
        </>
        <div className="home-form-navigation">
          <div className="home-form">
            <p className="home-title">Status : Subcribe </p>
            <p className="home-title">Fiyat : 210 TL</p>
            <hr></hr>

            <div className="home-icerik" onClick={onSubcribe}>
              <div>
                 <ul>
                  <li className="li">
                    <h2>Maç sonrası Kahve</h2>
                  </li>
                  <li className="li">
                    <h2>Maç sonrası Çikolata</h2>
                  </li>
                  <li className="li">
                    <h2>Ücretsiz Krampon</h2>
                  </li>
                  <li className="li">
                    <h2>Maçların Kaydı</h2>
                  </li>
                  <li className="li">
                    <h2>İstege Bağlı Saha</h2>
                  </li>
                  <li className="li">
                    <h2>İndirimli Fiyatlar</h2>
                  </li>
                  <li className="li">
                    <h2>Abone Ödülü</h2>
                  </li>
                  <li className="li">
                    <h2>Haftada x2 Oyun</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="home-form">
            <p className="home-title"> Status : Normal</p>
            <p className="home-title"> Fiyat : 300 TL</p>
            <hr></hr>

            <div className="home-icerik" onClick={onRezervation}>
              <div>
                <ul>
                  <li className="li">
                    <h2>Maç sonrası Su</h2>
                  </li>
                  <li className="li">
                    <h2>Maç sonrası Çay</h2>
                  </li>
                  <li className="li">
                    <h2>Ücretli Krampon</h2>
                  </li>
                  <li className="li">
                    <h2>Sosyal Halı Saha</h2>
                  </li>
                  <li className="li">
                    <h2>Saha Seçilemez</h2>
                  </li>
                  <li className="li">
                    <h2>Uygun Fiyatlar</h2>
                  </li>
                  <li className="li">
                    <h2>Haftanın Ödülü</h2>
                  </li>
                  <li className="li">
                    <h2>Haftanın Golü Ödülü</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
