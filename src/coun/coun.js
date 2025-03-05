import React from "react";
import "./coun.css";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
function Coun(){
  const {
    objetivosLogrados,
    objetivosTotales,
    setSearchValue
  }=React.useContext(ObjetivosContext)
    return(
      <><h1 className="count">
        Has completado {objetivosLogrados} de {objetivosTotales} tareas
      </h1>
      <div className="counButtons">
      <button className="count button"
onClick={
  ()=>{
    setSearchValue("")
  }
}
>
Total
</button>

<button className="count button"
onClick={
  ()=>{
    setSearchValue(false)
  }
}
>
  Pendientes
</button>
<button className="count button"
onClick={
  ()=>{
    setSearchValue(true)
  }
}
>
  Completadas
</button>
        </div>
        </>
      )
    }
export{Coun}  

// import React from "react";
// import "./coun.css";

// function Coun({unidadesTerminadas, unidadesTotales}){
//      return(
//       <h1>
//         Has completado {unidadesTerminadas} de {unidadesTotales}
//       </h1>
//       )
//     }
// export{Coun}  


