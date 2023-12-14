import "./App.css";
import React, { useState } from "react";
import sqlLogo from "./assests/sql.png";
import msgIcon from "./assests/message.svg";
import copy from "./assests/copy.png";
import clear from "./assests/clear.png";
import previous from "./assests/previous.png";
import DisplayTable from "./components/DisplayTable";
import maleData from "./data/MALE.json";
import entireData from "./data/MOCK_DATA.json";


function App() {
  let [data, setData] = useState(entireData)
  const handleData = (e) => {
    setData(e)
  }
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={sqlLogo} alt="Logo" className="logo" />
            <span className="brand">SQL Editor</span>
          </div>
          <div className="upperSideBottom">
            <button className="query" onClick={() => handleData(entireData)}>
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
            <button className="query" onClick={() => handleData(maleData)}>
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers WHERE customer_id = 1
            </button>
            <button className="query" onClick={() => handleData(maleData)}>
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
            <button className="query" onClick={() => handleData(maleData)}>
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
            <button className="query" onClick={() => handleData(maleData)}>
              <img src={msgIcon} alt="query" />
              SELECT * FROM customers
            </button>
          </div>
        </div>
        <div className="lowerSide"></div>
        <div className="listItems">
          <img src={copy} alt="" className="listItemsImg" />
          Copy
        </div>
        <div className="listItems">
          <img src={clear} alt="" className="listItemsImg" />
          Clear
        </div>
        <div className="listItems">
          <img src={previous} alt="" className="listItemsImg" />
          Previous
        </div>
      </div>
      <div className="main">
        <DisplayTable displayData={data}/>
      </div>
    </div>
  );
}

export default App;
