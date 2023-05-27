import {CheckIcon} from "../Icono/CheckIcon"
import {BorrarIcon} from "../Icono/borrarIcon"
import "../Icono/Icono.css"
function TodoItem(props){
    return(
     <li className="Lis">
        <CheckIcon 
        hecho={props.hecho}
        check={props.check}
        />
        <p className={`Context ${props.hecho && "Context--hecho"}`}>{props.text}
        </p>
        <BorrarIcon
        borrar={props.borrar}
        />
        </li>
        );
    }
export{TodoItem};