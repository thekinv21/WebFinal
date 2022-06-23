import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Custom/Navbar";
import "./Sahalar.css";

const Sahalar = () => {

  const navigate = useNavigate();
  const onClick = () => {
    navigate("/datainformation");
  };
  return (
    <div className="sahalar-full-page">
      <div>
        <Navbar index="3"></Navbar>
        <hr></hr>
      </div>

      <div className="title">
        <div>
          <ul className="wrap">
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLxc2k3_ArqzqToB7ilJnmLk-E-dNEFYYFJWj8Nfgr2OqkWZu3Tjsla8ZzRQ9TOQ0hII&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ5OYTXgGX_B7qbdoxSWUqv7ET5WiaqTzBw4GMnWMEBjNI5ft0_XyYmaExg5IQKqGaHl8&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OQozv2CFTqFGfV4dRNbyEXAn4RIcaaJK3tRjZQNeSSGqbjCgKmf7uLTHI0AYTgzK4c0&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrDeKAQMFwBxd9aenefiA73UaPSDkmLjBr8KO2Sh0dakkCkTEwREd70XXSHxYp5V7DhBA&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cR2Hni_0XuegjobZl2ODXS3gRsMOLb9iuOAETQix2J3vDaJcnHvQN1mj2jJLS3G_-gA&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRECzXR419fHSlxmNBxoCJQzdk9D6HS3HEfk9-_JH3ffhRVoLtmi0fEBIphgRRZD3J3PwQ&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAhvLbhXEJBVYXkJkXDHhMye969VFeN0SR4_wz0fOR3NrD2radnD3np-2vZHNuautx5Y&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxToyis-Z_juvzpB628o3IgUMyahIWXPZbqeGl5k5S3grGhNuCcXRqUTTzMzgV1Zck_6U&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFOZCuvcTZmcXhJH-1Hl0uzW0yAfX-r1DORI-wP2qBj0LIlMRRE0j-DCoWOXqGxD8eLA&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
            <li>
              <div>
                <img
                  className="image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFEszDGyqPL2fYNxJ7R3WhqBe50kcDY644To4QI2h3y9yMZtTPrFfRvTD2dA31b3bhOs&usqp=CAU"
                  alt=""
                  onClick={onClick}
                ></img>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sahalar;
