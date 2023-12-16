import msgIcon from "../assests/message.svg";
import { Button } from "@mui/material";
import { defData } from "../data/DefData.js";
import { peterData } from "../data/PeterData.js";
import { jacksonData } from "../data/JacksonData.js";
import { newyorkData } from "../data/NewyorkData.js";
import { JohnData } from "../data/JohnData.js";

const QueryContainer = ({handleValue}) => {
    return (
        <div className="upperSideBottom">
           Click on the following options to run a query
         <Button
           variant="contained"
           className="query"
           onClick={() => handleValue(defData)}
         >
           <img src={msgIcon} alt="query" />
           SELECT * FROM customers
         </Button>
         <Button
           className="query"
           variant="contained"
           onClick={() => handleValue(peterData)}
         >
           <img src={msgIcon} alt="query" />
           SELECT * FROM customers WHERE first_name = Peter
         </Button>
         <Button
           variant="contained"
           className="query"
           onClick={() => handleValue(jacksonData)}
         >
           <img src={msgIcon} alt="query" />
           SELECT * FROM customers WHERE last_name = Jackson
         </Button>
         <Button
           variant="contained"
           className="query"
           onClick={() => handleValue(newyorkData)}
         >
           <img src={msgIcon} alt="query" />
           SELECT * FROM customers WHERE City = Newyork
         </Button>
         <Button
           variant="contained"
           className="query"
           onClick={() => handleValue(JohnData)}
         >
           <img src={msgIcon} alt="query" />
           SELECT * FROM customers WHERE first_name = John
         </Button>
       </div>
    )
}

export default QueryContainer;