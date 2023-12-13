import React from "react";
import "./coun.css";

function Coun({unidadesTerminadas, unidadesTotales}){
     return(
      <h1>
        Has compleado {unidadesTerminadas} de {unidadesTotales}
      </h1>
      )
    }
export{Coun}  



// import React from "react";
// import "./coun.css";
// import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
// function Coun(){
//   const {
//     objetivosLogrados,
//     objetivosTotales
//   }=React.useContext(ObjetivosContext)
//     return(
//       <h1>
//         Has compleado {objetivosLogrados} de {objetivosTotales}
//       </h1>
//       )
//     }
// export{Coun}  