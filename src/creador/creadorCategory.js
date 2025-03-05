import React from "react"
import "./creador.css"

function CreadorCategory({setOpenModalCategory,setFormDataCategory}){
return (
<button 
                className="creadorCategory"
                onClick={()=>{
                  setOpenModalCategory(state=>!state)
                  setFormDataCategory(null)
                  }
                }
                  >
                Crear categoria
                </button>)
                }
                export {CreadorCategory}