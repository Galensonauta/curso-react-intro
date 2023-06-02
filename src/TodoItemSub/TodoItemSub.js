import {CheckIcon} from "../Icono/CheckIcon"
import {BorrarIcon} from "../Icono/BorrarIcon"
import React from "react";
import "../Icono/Icono.css"
function TodoItemSub(props){
                return(
     <li className="LisSub">
        <CheckIcon 
        hecho={props.hecho}
        check={props.check}
        />
        <p 
        className={`Context ${props.hecho && "Context--hecho"}`}>
            {props.text}
        </p>
       <BorrarIcon
        subBorrar={props.borrar}
        />
        </li>
        );
    }
export{TodoItemSub};