import React from "react";
import {Icono} from "./Icono"

function BorrarIcon({onBorrar}){
    return (
        <Icono
        type="borrar"
        color="grey"
        onClick={onBorrar}

        />
    )
}
export {BorrarIcon}


