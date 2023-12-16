import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { Button } from "@mui/material";
import { data1 } from "../data/secData";

const TextField = ({handleValue}) => {
    const [message, setMessage] = useState("");
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
                placeholder="Enter Query"
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
            onClick={() => handleValue(data1)}
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
