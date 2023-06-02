import React from "react"
import "./creador.css"
function Creador({setOpenModal}){
    return(
      <button 
        className="creador"
        onClick={()=>{setOpenModal(state=>!state)}}>
        +</button>
    )
    }
export{Creador}


