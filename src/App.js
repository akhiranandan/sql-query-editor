import "./App.css";
import React, { useState } from "react";
import sqlLogo from "./assests/sql.png";
import msgIcon from "./assests/message.svg";
import DisplayTable from "./components/DisplayTable";
import { Button } from "@mui/material";
import { dataa } from "./data/firstData.js";
import { data1 } from "./data/secData.js";
import LowerSide from "./components/LowerSide.jsx";

function App() {
  let [value, setValue] = useState(dataa);
  const handleValue = (e) => {
    setValue(e);
  };
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={sqlLogo} alt="Logo" className="logo" />
            <span className="brand">SQL Editor</span>
          </div>
          <div className="upperSideBottom">
           
              Click on the following options to run a query
          
            <Button
              variant="contained"
              className="query"
              onClick={() => handleValue(dataa)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products
            </Button>
            <Button
              className="query"
              variant="contained"
              onClick={() => handleValue(data1)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE categoryID = 2
            </Button>
            <Button
              variant="contained"
              className="query"
              onClick={() => handleValue(dataa)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE reorderLevel = 0
            </Button>
            <Button
              variant="contained"
              className="query"
              onClick={() => handleValue(data1)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE discontinued = 1
            </Button>
            <Button
              variant="contained"
              className="query"
              onClick={() => handleValue(dataa)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE unitPrice &gt; '20'
            </Button>
          </div>
        </div><LowerSide/>

      </div>
      <div className="main">
        <DisplayTable data={value} />
      </div>
    </div>
  );
}
export default App;
