import "./App.css";
import React, { useState } from "react";
import sqlLogo from "./assests/sql.png";
import msgIcon from "./assests/message.svg";
import copy from "./assests/copy.png";
import clear from "./assests/clear.png";
import previous from "./assests/previous.png";
import DisplayTable from "./components/DisplayTable";
import categoryID from "./data/CATEGORYID.json";
import entireData from "./data/ENTIRE_DATA.json";
import reorderLevel from "./data/REORDERLEVEL.json";
import discontinued from "./data/DISCONTINUED.json";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function App() {
  let [data, setData] = useState(entireData);
  const handleData = (e) => {
    setData(e);
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
            <Button
              variant="contained"
              className="query"
              onClick={() => handleData(entireData)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products
            </Button>
            <Button
              className="query"
              variant="contained"
              onClick={() => handleData(categoryID)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE categoryID = 2
            </Button>
            <Button
              variant="contained"
              className="query"
              onClick={() => handleData(reorderLevel)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE reorderLevel = 0
            </Button>
            <Button
              variant="contained"
              className="query"
              onClick={() => handleData(discontinued)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE discontinued = 1
            </Button>
            <Button
              variant="contained"
              className="query"
              onClick={() => handleData(reorderLevel)}
            >
              <img src={msgIcon} alt="query" />
              SELECT * FROM products WHERE unitPrice > '20'
            </Button>
            Select any query from the above options or write your own query
            <TextField
              className="textfield"
              fullWidth
              label=""
              id="fullWidth"
            />
            <Button className="ClearButton" variant="outlined" startIcon={<DeleteIcon />}>
              Clear
            </Button>
            <Button className="RunButton" variant="contained" endIcon={<SendIcon />}>
              Run
            </Button>
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
        <DisplayTable displayData={data} />
      </div>
    </div>
  );
}

export default App;
