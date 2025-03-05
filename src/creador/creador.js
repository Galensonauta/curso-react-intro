import React from "react"
import "./creador.css"
function Creador({setOpenModal,setFormData}){
    return(
      <button 
        className="creador"
        onClick={()=>{
          setOpenModal(state=>!state)
          setFormData(null)
          }
        }
          >
        Crear tarea</button>
    )
    }
export{Creador}


