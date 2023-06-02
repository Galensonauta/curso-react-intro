import React from "react";
import ReactDOM from 'react-dom';
import "./ModalSubTareasLista.css"


function ModalSubTareasLista({children}){
   return ReactDOM.createPortal (
     <div >
        {children}
     </div>,
document.getElementById("modalSubTareasLista")   );
}

export {ModalSubTareasLista};