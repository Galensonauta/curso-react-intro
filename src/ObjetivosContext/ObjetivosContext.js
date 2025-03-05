import React from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const ObjetivosContext = React.createContext();

function ObjetivoProvider({children}){
     //Estdos hechos y derechos, con sus estados modificadores(los setNombredeEstado)
     const {
        item:objetivos,
        salvarItem:salvarObjetivos,        
        loading,
        error,
      } = useLocalStorage("Objetivos_Vb", []);
      const {
        item:categories,
        salvarItem:salvarCategory,
      }= useLocalStorage("Categories_Vb",[])
      const [searchValue, setSearchValue]=React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
      const [openModalCategory, setOpenModalCategory] = React.useState(false);
      const [modalEdit, setmodalEdit] = React.useState(false);
    const [formData, setFormData] = React.useState(null);
    const [formDataCategory, setFormDataCategory] = React.useState(null);

      //Los de abajo son estados derivados
      const objetivosLogrados= objetivos.filter(todo=>!!todo.hecho).length;
      const objetivosTotales= objetivos.length
      const busquedaCate = categories.filter(
        (cat)=>{
          const nameCat = cat.name.toLowerCase();
          return nameCat
        }
      )
      const busqueda = objetivos.filter(
       (todo)=>{ 
        if (typeof searchValue === 'boolean') {
          return todo.hecho === searchValue;
        }else{
         const searchName =searchValue.toLowerCase();
        const todoCat= todo.category.toLowerCase();
        const todoName= todo.name.toLowerCase();
        const todoText= todo.text.toLowerCase();        
        return  todoCat.includes(searchName) || todoName.includes(searchName) || todoText.includes(searchName) }
                     
    });

    const nuevoCategory=(name)=>{
      const copiaCategory = [...categories]
      const indexCategory=copiaCategory.findIndex((cat)=>cat.name===name)
      if(indexCategory>-1){
        copiaCategory[indexCategory]={...copiaCategory[indexCategory]}
      }else{
        copiaCategory.push({
          name}
        )
      }
      salvarCategory(copiaCategory)
    }
    const borrarCate = (name)=>{
      const copiaCategory = [...categories]
      const indexCategory=copiaCategory.findIndex((cat)=>cat.name===name)
      copiaCategory.splice(indexCategory, 1);
      salvarCategory(copiaCategory)
    }  
    const nuevoObjetivo =(name,text,deadline,category)=>{
      const copiaObjetivo=[...objetivos];
      const indexObjetivo=copiaObjetivo.findIndex((obj)=>obj.name===name)
      if(indexObjetivo>-1){
        copiaObjetivo[indexObjetivo]={...copiaObjetivo[indexObjetivo],text,deadline,category}
      }else{
          copiaObjetivo.push({
            name,
            text,
            deadline,
            category,
            hecho:false,           
          })
      }
      salvarObjetivos(copiaObjetivo);
    }    
    const check = (text)=>{
      const copiaObjetivo=[...objetivos];
      const ObjetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===text)
      copiaObjetivo[ObjetivoIndex].hecho=copiaObjetivo[ObjetivoIndex].hecho? false: true
      salvarObjetivos(copiaObjetivo)
    }
     const borrar = (text)=>{
      const copiaObjetivo=[...objetivos];
      const ObjetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===text
      );
      copiaObjetivo.splice(ObjetivoIndex, 1);
      salvarObjetivos(copiaObjetivo)
    }  
    return (   
    <ObjetivosContext.Provider value={{
    loading,
    error,
    objetivosTotales,
    objetivosLogrados,
    searchValue,
    setSearchValue,
    busqueda,
    busquedaCate,
    check,
    borrarCate,
    borrar,
    openModal,
    setOpenModal,
    openModalCategory, 
    setOpenModalCategory,
    nuevoObjetivo,
    nuevoCategory,
    objetivos, 
    modalEdit,
    setmodalEdit,
    formData,
    setFormData,
    formDataCategory, setFormDataCategory
    }}>
       {children}
    </ObjetivosContext.Provider>
    )
}

export {ObjetivosContext, ObjetivoProvider}


