import React from "react";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
import "./FormObjetivo.css";
import { CheckIcon } from "../Icono/CheckIcon";
import { BorrarIcon } from "../Icono/BorrarIcon";

function FormObjetivo(){
    const {
      nuevoObjetivo,
      setOpenModal,
           }=React.useContext(ObjetivosContext);
    const [nuevoObjetivoValue,setNuevoObjetivoValue]=React.useState("");
    const onSubmit=(event)=>{
    event.preventDefault();
    nuevoObjetivo(nuevoObjetivoValue);
    setOpenModal(false)}
    const onCancel=()=>{setOpenModal(false)
    }
    const onChange= (event)=>{setNuevoObjetivoValue(event.target.value)}
  return (
<form onSubmit={onSubmit}>
<label>Escribe tu nuevo objetivo</label>
<textarea  
value={nuevoObjetivoValue}
onChange={onChange}
placeholder="Mandale mecha"/>
<div className="FormObjetivo-buttonContainer">
<button type="submit" className="Icono-nuevo-check"><CheckIcon/></button>
<button type="button" onClick={onCancel} className="Icono-nuevo-borrar"><BorrarIcon/></button> 
</div>
</form>
  );
 }
export {FormObjetivo}



