import {CheckIcon} from "../Icono/CheckIcon"
import {BorrarIcon} from "../Icono/BorrarIcon"
import {EditIcon} from "../Icono/EditIcon"
import React from "react"
import "../Icono/Icono.css"
import "./Unidad.css"


function Unidad(props){
  const name=props.name;
  const text=props.text;
  const deadline=props.deadline;
  const category = props.category
  const handleEditUnidad = () => {
    props.setFormData({
        name: name,
        description: text,
        deadline: deadline,
        category: category
    });
};
 return(
     <li className={`Context ${props.hecho && "Context--hecho"}`}
     > 
     <div className={`unidadHeader ${props.hecho && "unidadHeader--hecho"}`}>
     <h1 
        className={`categoryUnidad`}
        >{category? category: "General"}
        </h1>
         <h2 
        className={`name ${props.hecho && "Context--hecho"}`}
        >{name}
        </h2>        
        <h3 
        className={`deadline ${props.hecho && "Context--hecho"}`}
        >{deadline ? `Fecha limite: ${deadline}` : "Sin fecha limite"}
        </h3>
      </div>      
        <p 
        className={`text ${props.hecho && "Context--hecho"}`}
        >{text}
        </p>
        <div className="iconTask">
        <CheckIcon 
        hecho={props.hecho}
        check={props.check}
        />    
         <EditIcon
                setOpenModal={props.setOpenModal}
                setmodalEdit={props.setmodalEdit}
                handleEdit={handleEditUnidad}
            />
           <BorrarIcon
        borrar={props.borrar}/>
        </div>
          </li> 
          )    
    }
    
export{Unidad};
// import React from "react";
// import {CheckIcon} from "../Icono/CheckIcon"
// import {BorrarIcon} from "../Icono/BorrarIcon"
// import "../Icono/Icono.css"
// import "../lis/lis.css"


// function Unidad(props){
  
//     return(
//     <div>
//         <li className="Lis">
//         <CheckIcon 
//         hecho={props.hecho}
//         onCheck={props.onCheck}
//         />
//         <p  className={`Context ${props.hecho && "Context--hecho"}`}
//         >{props.text}
        
//           </p>         
//         <BorrarIcon
//         onBorrar={props.onBorrar}/>
//           </li>
      
          
//     </div>)
//     }

// export{Unidad};






