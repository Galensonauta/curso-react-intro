import React from "react";
import {Icono} from "./Icono"

function BorrarIcon({borrar}){
    return (
        <Icono
        type="borrar"
        color="grey"
        onClick={borrar}
        />
    )
}
export {BorrarIcon}


