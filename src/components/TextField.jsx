import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { Button } from "@mui/material";
import { runData } from "../data/RunData";
import { runData2 } from "../data/RunData2";

const TextField = ({handleValue}) => {
    const [message, setMessage] = useState("");
    // using a counter to change the table data
    const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count+1);
      count % 2 === 0 ? handleValue(runData) : handleValue(runData2);
    }
    const handleChange = (event) => {
    setMessage(event.target.value);
  };
    return(
        <>
        <div className="lowerSide">
          <form>
              <label>
                Write your own Query
              </label>
              <textarea
                type="text"
                placeholder="SELECT * FROM CUSTOMERS"
                className="textfield"
                value={message}
                onChange={handleChange}
              />
          </form>
          <Button
            className="ClearButton"
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => setMessage("")}
          >
            Clear
          </Button>
          <Button
            className="RunButton"
            variant="contained"
            onClick={handleClick}
            endIcon={<SendIcon />}
          >
            Run
          </Button>
        </div>
        <div className="footer">Made by Akhira Nandan for Atlan Challenge Round @2023</div>
        </>
    )
}

export default TextField;
