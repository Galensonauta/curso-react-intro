import React from "react";
import {Icono} from "./Icono"

function CheckIcon({hecho,check}){
    return (
        <Icono
        type="check"
        color={hecho?"green":"grey"}
        onClick={check}
        />
    )
}
export {CheckIcon}

