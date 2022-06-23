import React from "react";
import { useNavigate } from "react-router-dom";
import "./Tables.css";

const Tables = ({ data }) => {

  const navigate = useNavigate();

  const OnRegist = () => {

    navigate("/rezervation")  
  }

  return (
    <div className="app-container">
      <table >
        <thead >
          <tr className="tr">
            <th>Field Name</th>
            <th>District</th>
            <th>Spare Date</th>
            <th>Spare Time</th>
          </tr>
        </thead>

        

        <tbody className="icerik" onClick={OnRegist} >
          {data.map((item) => (
            <tr key={item.id} >
              <td>{item.fieldName}</td>
              <td>{item.district}</td>
              <td>{item.date}</td>
              <td>{item.spareTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
