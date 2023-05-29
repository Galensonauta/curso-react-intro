import React from "react";
import "./coun.css";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
function Coun(){
  const {
    objetivosLogrados,
    objetivosTotales
  }=React.useContext(ObjetivosContext)
    return(
      <h1>
        Has compleado {objetivosLogrados} de {objetivosTotales}
      </h1>
      )
    }
export{Coun}  