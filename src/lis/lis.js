import React from "react";
import "./lis.css";

function Lis({children}){
    return(
      <ul className="Lis">
      {children}
   </ul>
      )
    }
export{Lis}  