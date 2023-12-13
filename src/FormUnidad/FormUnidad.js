import React from "react";
import { CheckIcon } from "../Icono/CheckIcon";
import { BorrarIcon } from "../Icono/BorrarIcon";
import "./FormUnidad.css";
// import {useRef} from "react";

function FormUnidad({agregarUn,setOpenModal}){
   const [nuevoValor, setNuevoValor]= React.useState("")
    const onChange = (event)=>{
        setNuevoValor(event.target.value);
    };
    const onSubmit = (event) => {
      event.preventDefault();
      agregarUn(nuevoValor);
      setOpenModal(false)
    };
    
    const onCancel=()=>
      setOpenModal(false)
    
  return (
<form onSubmit={onSubmit}>
<label>Escribe tu nuevo objetivo</label>
<textarea
value={nuevoValor}  
onChange={onChange}
required
placeholder="Mandale mecha"/>
<div className="FormObjetivo-buttonContainer">
<button type="submit" className="Icono-nuevo-check"><CheckIcon/></button>
<button type="button" onClick={onCancel} className="Icono-nuevo-borrar"><BorrarIcon/></button> 
</div>
</form>
  );
 }
export {FormUnidad}


// import React from "react";
// import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
// import "./FormObjetivo.css";
// import { CheckIcon } from "../Icono/CheckIcon";
// import { BorrarIcon } from "../Icono/BorrarIcon";

// function FormObjetivo(){
//     const {
//       nuevoObjetivo,
//       setOpenModal,
//            }=React.useContext(ObjetivosContext);
//     const [nuevoObjetivoValue,setNuevoObjetivoValue]=React.useState("");
//     const onSubmit=(event)=>{
//     event.preventDefault();
//     nuevoObjetivo(nuevoObjetivoValue);
//     setOpenModal(false)}
//     const onCancel=()=>{setOpenModal(false)
//     }
//     const onChange= (event)=>{setNuevoObjetivoValue(event.target.value)}
//   return (
// <form onSubmit={onSubmit}>
// <label>Escribe tu nuevo objetivo</label>
// <textarea  
// value={nuevoObjetivoValue}
// onChange={onChange}
// placeholder="Mandale mecha"/>
// <div className="FormObjetivo-buttonContainer">
// <button type="submit" className="Icono-nuevo-check"><CheckIcon/></button>
// <button type="button" onClick={onCancel} className="Icono-nuevo-borrar"><BorrarIcon/></button> 
// </div>
// </form>
//   );
//  }
// export {FormObjetivo}



