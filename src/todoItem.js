import {CheckIcon} from "./CheckIcon"
import {BorrarIcon} from "./borrarIcon"
import "./todoItem.css"
function TodoItem(props){
    return(
     <li className="Lis">
        <CheckIcon 
        hecho={props.hecho}
        check={props.check}
        />
        {/* <span 
         className={`Icono Icono-check ${props.hecho && "Icono-check--verde"}`}
         check={props.check}
         >
         
       V </span> */}
        <p className={`Context ${props.hecho && "Context--hecho"}`}>{props.text}
        </p>
        <BorrarIcon
        borrar={props.borrar}
        />
        {/* <span className="Icono Icono-borrar" 
        borrar={props.borrar}
        >
            X</span> */}
        </li>
        );
    }
export{TodoItem};