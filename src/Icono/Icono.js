import { RiCheckboxCircleLine} from "react-icons/ri";
import { RiDeleteBin2Line} from "react-icons/ri";
import "./Icono.css"

const iconoTypes = {
    "check": (color)=> <RiCheckboxCircleLine className="Icono-svg" fill={color}/> ,
    "borrar": (color)=> <RiDeleteBin2Line className="Icono-svg" fill={color}/> 
}

function Icono({type, color="gray", onClick}){
    return (
        <span
        className={`Icono Icono-${type}`}
        onClick={onClick}
        >
        {iconoTypes[type](color)} 
        </span>
        )
}
export {Icono};

