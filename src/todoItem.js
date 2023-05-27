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
        <p className={`Context ${props.hecho && "Context--hecho"}`}>{props.text}
        </p>
        <BorrarIcon
        borrar={props.borrar}
        />
        </li>
        );
    }
export{TodoItem};