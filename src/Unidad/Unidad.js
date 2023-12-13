import React from "react";
import {CheckIcon} from "../Icono/CheckIcon"
import {BorrarIcon} from "../Icono/BorrarIcon"
import "../Icono/Icono.css"
import "../lis/lis.css"


function Unidad(props){
  
    return(
    <div>
        <li className="Lis">
        <CheckIcon 
        hecho={props.hecho}
        onCheck={props.onCheck}
        />
        <p  className={`Context ${props.hecho && "Context--hecho"}`}
        >{props.text} 
          </p>
        <BorrarIcon
        onBorrar={props.onBorrar}/>
          </li> 
    </div>)}

export{Unidad};

{/* let {clases}=props
{clases.map(([unidad, clase])=>
<Clase
key={unidad.text}
text={clase.text}
hecho={clase.hecho}
clases={props.clases}
onCheck={()=>check(clase.text)}
onBorrar={()=>borrar(clase.text)}
></Clase>)
}  */}

// import {CheckIcon} from "../Icono/CheckIcon"
// import {BorrarIcon} from "../Icono/BorrarIcon"
// import "../CreadorSubTarea/CreadorSubTarea.css";
// import React from "react";
// import "../Icono/Icono.css"
// import { CreadorSubTarea } from "../CreadorSubTarea/CreadorSubTarea";
// import { CreadorLisSub } from "../CreadorLisSub/CreadorLisSub";
// import { TodoItemSub } from "../TodoItemSub/TodoItemSub";
// import { LisSub } from "../LisSub/LisSub";
// import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";


// function TodoItem(props){
//     const {
//         openSubLis}=React.useContext(ObjetivosContext)
//  return(
//      <li className="Lis">
//         <CheckIcon 
//         hecho={props.hecho}
//         check={props.check}
//         />
//         <p 
//         className={`Context ${props.hecho && "Context--hecho"}`}
//         >{props.text}
//         </p>
//         <p>{props.botonCreadorSubLis}</p>
//         <p>{props.botonCreadorSubTarea}</p>
//            <BorrarIcon
//         borrar={props.borrar}/>
//       {openSubLis &&(  
//          <LisSub className="Lis">
//             <TodoItemSub>
//             </TodoItemSub>
//          </LisSub>)}
//           </li> 
//           )    
//     }
    
// export{TodoItem};




