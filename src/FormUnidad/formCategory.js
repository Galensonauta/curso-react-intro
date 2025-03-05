
import React from "react";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
import "./FormUnidad.css";
import { CheckIcon } from "../Icono/CheckIcon";
import { BorrarIcon } from "../Icono/BorrarIcon";

function FormCategory(){
    const {
        nuevoCategory,
      setOpenModalCategory,
      formDataCategory,
      setFormDataCategory
           }=React.useContext(ObjetivosContext);
    
// const [nuevoObjetivoValue,setNuevoObjetivoValue]=React.useState("");


    const [newCategory, setnewCategory] = React.useState('');

    React.useEffect(() => {
      if (formDataCategory) {
          setnewCategory(formDataCategory.name);
      }
  }, [formDataCategory]);

    const onSubmit=(event)=>{
    event.preventDefault();
    nuevoCategory(newCategory);
    setOpenModalCategory(false)    
   setFormDataCategory(null)
   console.log(newCategory)
   console.log(formDataCategory)
     }
    const onCancel=()=>{
      setOpenModalCategory(false);
         setFormDataCategory(null);
    }
    const handleInputChange= (event, setState)=>{
      setState(event.target.value)
    }
  return (
<form onSubmit={onSubmit}>
<input  
value={newCategory}
onChange={(event)=>handleInputChange(event, setnewCategory)}
required
placeholder="Escribe el nombre de la categoria"/>
  {/* <label>
                Selecciona un color:
                <input 
                    type="color" 
                    value={newColor}
                    onChange={(event) => setNewColor(event.target.value)}
                />
            </label> */}
<div className="FormObjetivo-buttonContainer">
<button type="submit" className="formButtons Icono-nuevo-check"><CheckIcon/></button>
<button type="button" onClick={onCancel} className="formButtons Icono-nuevo-borrar"><BorrarIcon/></button> 
</div>
</form>
  );
 }
export {FormCategory}
