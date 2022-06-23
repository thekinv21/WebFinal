import React,{useState} from "react";
import Navbar from "../Custom/Navbar";
import Tables from '../Information/FieldTables/Tables'
import DATA from "./../Information/FieldTables/RezarvationData";
import "./Admin.css";

const Admin = (props) => {

  const [search, setSearch] = useState("");

  const Searchİtem = (data) => {
    return data.filter((item) => item.fieldName.toLowerCase().includes(search));
  };

  return (

    <div className="admin-page">
      <>
        <Navbar></Navbar>
        <hr></hr>
      </>
      <div className="asd">
      <div className="title">
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
        <Tables data={Searchİtem(DATA)}></Tables>
      </div>
    </div>
  );
};

export default Admin;
