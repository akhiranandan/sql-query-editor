import msgIcon from "../assests/message.svg";
import { Button } from "@mui/material";
import { dataa } from "../data/firstData.js";
import { data1 } from "../data/secData.js";

const QueryContainer = ({handleValue}) => {
    return (
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
    )
}

export default QueryContainer;