import "./todoItem.css"
function TodoItem(props){
    return(
     <li className="Lis">
        <span className={`Icono Icono-check ${props.hecho && "Icono-check--verde"}`}>
       V </span>
        <p className={`Context ${props.hecho && "Context--hecho"}`}>{props.text}
        </p>
        <span className="Icono Icono-borrar" >
            X</span>
        </li>
        );
    }
export{TodoItem};