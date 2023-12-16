import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { Button } from "@mui/material";

const LowerSide = () => {
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleClick = () => {};
    return(
        <div className="lowerSide">
          <form>
              <label>
                Select any query from the above options or write your own query
              </label>
              <input
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
    )
}

export default LowerSide;