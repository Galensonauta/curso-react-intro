import React from "react";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
import { CheckIcon } from "../Icono/CheckIcon";
import { BorrarIcon } from "../Icono/BorrarIcon";
import "../CreadorSubTarea/CreadorSubTarea.css";
import "../FormObejtivo/FormObjetivo.css"

function FormSubTarea(){
    const {
      nuevoSubObjetivo,
      setOpenModalSubTareas,
           }=React.useContext(ObjetivosContext);
    const [nuevoSubObjetivoValue,setNuevoSubObjetivoValue]=React.useState("");
    const onSubmit=(event)=>{
    event.preventDefault();
    nuevoSubObjetivo(nuevoSubObjetivoValue);
    setOpenModalSubTareas(false)}
    const onCancel=()=>{setOpenModalSubTareas(false)
    }
    const onChange= (event)=>{setNuevoSubObjetivoValue(event.target.value)}
    

  return (
<form onSubmit={onSubmit}>
<label>SubTarea</label>
<textarea  
value={nuevoSubObjetivoValue}
onChange={onChange}
placeholder="Mandale mecha"/>
<div className="FormObjetivoSub-buttonContainer">
<button type="submit" className="Icono-nuevo-check"><CheckIcon/></button>
<button type="button" onClick={onCancel} className="Icono-nuevo-borrar"><BorrarIcon/></button> 
</div>
</form>
  );
 }
export {FormSubTarea}