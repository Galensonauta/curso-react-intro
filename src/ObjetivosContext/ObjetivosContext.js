import React from "react";
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
      const [searchValue, setSearchValue]=React.useState("");
      const [openModal, setOpenModal] = React.useState(true);
      //Los de abajo son estados derivados
      const objetivosLogrados= objetivos.filter(todo=>todo.hecho).length;
      const objetivosTotales= objetivos.length
      const busqueda = objetivos.filter(
       (todo)=>{
         return  todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  
    const check = (text)=>{
      const nuevoObjetivo=[...objetivos];
      const ObjetivoIndex= nuevoObjetivo.findIndex((todo)=>todo.text===text
      )
      nuevoObjetivo[ObjetivoIndex].hecho=true
      salvarObjetivos(nuevoObjetivo)
    }
    const borrar = (text)=>{
      const nuevoObjetivo=[...objetivos];
      const ObjetivoIndex= nuevoObjetivo.findIndex((todo)=>todo.text===text
      );
      nuevoObjetivo.splice(ObjetivoIndex, 1);
      salvarObjetivos(nuevoObjetivo)
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
    check,
    borrar,
    openModal,
    setOpenModal,
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