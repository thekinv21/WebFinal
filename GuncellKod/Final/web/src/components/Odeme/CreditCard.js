import React, { useState } from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./CreditCard.css";

const CreditCard = () => {
  const [number, setNumber] = useState(""); //CrediCart Numarası İÇin//
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
      <div>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        ></Card>
      </div>

      <div className="form-group">
        <input
          className="text-css"
          type="text"
          name="number"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

        <input
          className="text-css"
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          maxLength={4}
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

        <input
          className="text-css"
          type="text"
          name="number"
          maxLength={16}
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>

        <input
          className="text-css"
          type="text"
          name="cvc"
          placeholder="Cvc"
          maxLength={3}
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        ></input>
      </div>
    </div>
  );
};

export default CreditCard;
