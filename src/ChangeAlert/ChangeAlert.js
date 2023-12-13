import React from "react";
import { WithStorageListener } from "./WithStorageListener";

function ChangeAlert({show, toggleShow}){
    if(show){
        return (
            <div>
               <h1>Hubo cambios</h1>
               <button
               onClick={toggleShow}
               > Volver a cargar la info
               </button>
            </div>
        );       
    } else {
        return null
    }
    
}

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}