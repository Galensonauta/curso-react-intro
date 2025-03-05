
import React from "react";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
import "./FormUnidad.css";
import { CheckIcon } from "../Icono/CheckIcon";
import { BorrarIcon } from "../Icono/BorrarIcon";

function FormObjetivo(){
    const {
      nuevoObjetivo,
      setOpenModal,
      formData,
      setFormData,
      busquedaCate
           }=React.useContext(ObjetivosContext);
    
// const [nuevoObjetivoValue,setNuevoObjetivoValue]=React.useState("");

    const [newName, setNewName] = React.useState('');
    const [newDescription, setnewDescription] = React.useState('');
    const [newDeadline, setnewDeadline] = React.useState('');
    const [newCategory, setnewCategory] = React.useState('');
    // const [expanded, setExpanded] = React.useState(false);

    React.useEffect(() => {
      if (formData) {
        setNewName(formData.name);
          setnewDescription(formData.description);
          setnewDeadline(formData.deadline);
          setnewCategory(formData.category);
      }
  }, [formData]);


    const onSubmit=(event)=>{
    event.preventDefault();
    nuevoObjetivo(newName,newDescription,newDeadline,newCategory);
    setOpenModal(false)    
   setFormData(null)
     }
    const onCancel=()=>{
      setOpenModal(false);
         setFormData(null);
    }
    const handleInputChange= (event, setState)=>{
      setState(event.target.value)
    }

  return (
<form onSubmit={onSubmit}>
<input  
value={newName}
onChange={(event)=>handleInputChange(event, setNewName)}
required
placeholder="Escribe el titulo"/>
<textarea
value={newDescription}
onChange={(event)=>handleInputChange(event,setnewDescription)}
placeholder="Breve descripción"
/>
<h2 className="deadeLineTitle">Seleccione la fecha limite</h2>
<input  
value={newDeadline}
onChange={(event)=>handleInputChange(event, setnewDeadline)}
type="date"
/>
<select               
                value={newCategory}
                onChange={(event) => handleInputChange(event, setnewCategory)}
            > 
            <option value="Seleccione una categoria">Seleccione una categoria</option>                         
            {busquedaCate.map(cat=>(
              <option value={cat.name}>{cat.name}</option> ))               
            }              
            </select>
<div className="FormObjetivo-buttonContainer">
<button type="submit" className="formButtons Icono-nuevo-check"><CheckIcon/></button>
<button type="button" onClick={onCancel} className="formButtons Icono-nuevo-borrar"><BorrarIcon/></button> 
</div>
</form>
  );
 }
export {FormObjetivo}



