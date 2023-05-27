import { ImCheckmark2} from "react-icons/im";
import { RiDeleteBin2Line} from "react-icons/ri";


const iconoTypes = {
    "check": <ImCheckmark2/> ,
    "borrar": <RiDeleteBin2Line/> 
}

function Icono({type}){
    return (
        <span
        className={`Icono Icono-${type}`}
        >
        {iconoTypes[type]} 
        </span>
        )
}
export {Icono};

