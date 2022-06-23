import React, { useState } from "react";

import Navbar from "../Custom/Navbar";
import Tables from "./FieldTables/Tables";
import DATA from "./FieldTables/RezarvationData";
import "./Datainformation.css";

const Dataİnformation = () => {

  const [search, setSearch] = useState("");

  const Searchİtem = (data) => {
    return data.filter((item) => item.fieldName.toLowerCase().includes(search));
  };

  return (
    <div>
      <>
        <Navbar index="4" />
      </>
      <div className="info-full-page">
        <>
          <hr></hr>
        </>

        <div className="title">
          <div className="space">
            <h3>Search Field</h3>
          </div>

          <div className="example1">
            <input
              className="example"
              type="text"
              placeholder="Search.."
              onChange={(e) => setSearch(e.target.value)}
              
            ></input>

            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        <div>
          <Tables data={Searchİtem(DATA)} />
        </div>
      </div>
    </div>
  );
};

export default Dataİnformation;
