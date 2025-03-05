import React from "react";
import ReactDOM from 'react-dom';
import "./Modal.css"



function Modal({children,container}){

     const element = document.getElementById(container);
     if (!element) {
       console.error(`No se encontró un contenedor con el id ${container}`);
       return null;
     }
   return ReactDOM.createPortal (
     <div className="Modal">
        {children}
     </div>,     
     element
);
}

export {Modal};