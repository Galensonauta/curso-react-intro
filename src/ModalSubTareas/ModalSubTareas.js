import React from "react";
import ReactDOM from 'react-dom';
import "../ModalSubTareas/ModalSubTareas.css"


function ModalSubTareas({children}){
   return ReactDOM.createPortal (
     <div className="ModalSubTareas">
        {children}
     </div>,
document.getElementById("modalSubTareas")   );
}

export {ModalSubTareas};