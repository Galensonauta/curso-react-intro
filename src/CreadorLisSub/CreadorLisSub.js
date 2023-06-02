import React from "react"
import "../CreadorSubTarea/CreadorSubTarea.css";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";

function CreadorLisSub(){
  const {setSubLis
  }=React.useContext(ObjetivosContext);
    return(
      <button 
        className="creadorSubLis"
        onClick={()=>{setSubLis(state=>!state)}}>
        +</button>
    )
    }
export{CreadorLisSub}