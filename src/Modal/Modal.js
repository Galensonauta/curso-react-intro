import React from "react";
import ReactDOM from 'react-dom';

function Modal({childen}){
   return ReactDOM.createPortal (
     <div className="Modal">
        {childen}
     </div>,
    document.getElementById("Modal")
   );
}

export {Modal};