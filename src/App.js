import "./App.css";
import React, { useState } from "react";
import sqlLogo from "./assests/sql.png";
import DisplayTable from "./components/DisplayTable";
import { defData } from "./data/DefData.js";
import TextField from "./components/TextField.jsx";
import QueryContainer from "./components/QueryContainer.jsx";

function App() {
  let [value, setValue] = useState(defData);
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
          <QueryContainer handleValue={handleValue}/>
        </div>
        <TextField handleValue={handleValue}/>
      </div>
      <div className="main">
        <DisplayTable data={value} />
      </div>
    </div>
  );
}
export default App;