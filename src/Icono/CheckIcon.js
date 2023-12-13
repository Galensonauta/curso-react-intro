import React from "react";
import {Icono} from "./Icono"


function CheckIcon({hecho,onCheck}){
       return (
        <Icono
        type="check"
        color={hecho?"green":"grey"}
        onClick={onCheck}
       />
    )
}
export {CheckIcon}

