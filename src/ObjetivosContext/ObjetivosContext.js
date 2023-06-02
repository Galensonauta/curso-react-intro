import React, {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const ObjetivosContext = React.createContext();

function ObjetivoProvider({children}){
     //Estdos hechos y derechos, con sus estados modificadores(los setNombredeEstado)
     const {
        item:objetivos,
        salvarItem:salvarObjetivos,
        loading,
        error
      } = useLocalStorage("Objetivos_Vb", []);
      const {
        item:subObjetivos,
        salvarItem:salvarSubObjetivos,
        // loading,
        // error
      } = useLocalStorage("SubObjetivos_Vb", []);
      const [searchValue, setSearchValue]=React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
      const [openModalSubTareas, setOpenModalSubTareas] = React.useState(false);
      const [openSubLis, setSubLis] = React.useState(false);
        
      console.log(objetivos)
      console.log(subObjetivos)
      console.log({openModal})
      console.log({openModalSubTareas})
      console.log({openSubLis})


      //Los de abajo son estados derivados
      const objetivosLogrados= objetivos.filter(todo=>todo.hecho).length;
      const objetivosTotales= objetivos.length
      const busqueda = objetivos.filter(
       (todo)=>{
         return  todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
    const subBusqueda = subObjetivos.filter(
      (todo)=>{
        return  todo.text.toLowerCase().includes(searchValue.toLowerCase());
   });
    const nuevoObjetivo =(text)=>{
      const copiaObjetivo=[...objetivos];
      copiaObjetivo.push({
        text,
        check:false,
      });
      salvarObjetivos(copiaObjetivo)}

    const check = (text)=>{
      const copiaObjetivo=[...objetivos];
      const ObjetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===text
      )
      copiaObjetivo[ObjetivoIndex].hecho=true
      salvarObjetivos(copiaObjetivo)
    }
    const borrar = (text)=>{
      const copiaObjetivo=[...objetivos];
      const ObjetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===text
      );
      copiaObjetivo.splice(ObjetivoIndex, 1);
      salvarObjetivos(copiaObjetivo)
    }
    const subObjetivosLogrados= subObjetivos.filter(todo=>todo.hecho).length;
      const subObjetivosTotales= subObjetivos.length
      
      const nuevoSubObjetivo=(text)=>{
        const copiaSubObjetivo=[...subObjetivos];
        copiaSubObjetivo.push({
          text,
          subCheck:false,
        });
        salvarSubObjetivos(copiaSubObjetivo)}
        const subCheck = (text)=>{
          const copiaSubObjetivo=[...subObjetivos];
          const subObjetivoIndex= copiaSubObjetivo.findIndex((todo)=>todo.text===text
          )
          copiaSubObjetivo[subObjetivoIndex].hecho=true
          salvarSubObjetivos(copiaSubObjetivo)
        }
        const subBorrar = (text)=>{
          const copiaSubObjetivo=[...subObjetivos];
          const subObjetivoIndex= copiaSubObjetivo.findIndex((todo)=>todo.text===text
          );
          copiaSubObjetivo.splice(subObjetivoIndex, 1);
          salvarSubObjetivos(copiaSubObjetivo)
        }
    return (   
    <ObjetivosContext.Provider value={{
    loading,
    error,
    objetivosTotales,
    objetivosLogrados,
    subObjetivosTotales,
    subObjetivosLogrados,
    searchValue,
    setSearchValue,
    busqueda,
    subBusqueda,
    check,
    subCheck,
    borrar,
    subBorrar,
    openModal,
    setOpenModal,
    openModalSubTareas, 
    setOpenModalSubTareas,
    nuevoObjetivo,
    nuevoSubObjetivo,
    openSubLis, 
    setSubLis,
    }}>
       {children}
    </ObjetivosContext.Provider>
    )
}

export {ObjetivosContext, ObjetivoProvider}


// const objetivosDefault = [
//   {text: "Universidad de Chilecito",
//   hecho: true},
//   {text: "ALURA/ONE",
//   hecho: false},
//   {text: "Maxi programa",
//   hecho: false},
//   {text: "Fullstack Platzi",
//   hecho: false},
// ];
// localStorage.setItem("Objetivos_Vb", JSON.stringify(objetivosDefault));