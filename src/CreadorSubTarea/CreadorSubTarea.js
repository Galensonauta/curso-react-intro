import React from "react"
import "./CreadorSubTarea.css";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";

function CreadorSubTarea(){
  const {setOpenModalSubTareas,
  }=React.useContext(ObjetivosContext);
    return(
      <button 
        className="creadorSubTarea"
        onClick={()=>{setOpenModalSubTareas(state=>!state)}}>
        +</button>
    )
    }
export{CreadorSubTarea}