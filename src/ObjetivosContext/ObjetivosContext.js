// import React, {useState} from "react";
// import { useLocalStorage } from "./useLocalStorage";

// const ObjetivosContext = React.createContext();

// function ObjetivoProvider({children}){
//      //Estdos hechos y derechos, con sus estados modificadores(los setNombredeEstado)
//      const {
//         item:objetivos,
//         salvarItem:salvarObjetivos,
//         loading,
//         error,
//       } = useLocalStorage("Objetivos_Vb", []);
      
//       const [searchValue, setSearchValue]=React.useState("");
//       const [openModal, setOpenModal] = React.useState(false);
//       const [openModalSubTareas, setOpenModalSubTareas] = React.useState(false);
//       const [openSubLis, setSubLis] = React.useState(false);

        
//       console.log(objetivos)
//       console.log({openModal})
//       console.log({openModalSubTareas})
//       console.log({openSubLis})


//       //Los de abajo son estados derivados
//       const objetivosLogrados= objetivos.filter(todo=>todo.hecho).length;
//       const objetivosTotales= objetivos.length
//       const busqueda = objetivos.filter(
//        (todo)=>{
//          return  todo.text.toLowerCase().includes(searchValue.toLowerCase());
//     });
    
//     const nuevoObjetivo =(text)=>{
//       const copiaObjetivo=[...objetivos];
//       const nuevoObjetivoPrincipal ={
//         text,
//         check:false,
//         subObjetivos:[],
//       }
//       copiaObjetivo.push(nuevoObjetivoPrincipal);
//       salvarObjetivos(copiaObjetivo);
//       const nuevoObjetivoPrincipales=[...objetivosPrincipales,nuevoObjetivoPrincipal]
//       setObjetivosPrincipales(nuevoObjetivoPrincipales)
//       console.log("inicio  array subObjetivos")
//       console.log(text)
//     }
//       const nuevoSubObjetivo=(objetivoText, subText)=>{
//         const copiaObjetivo=[...objetivos];
//         const objetivoIndex = copiaObjetivo.findIndex((todo)=> todo.text === objetivoText);
//         if(objetivoIndex !== -1 && copiaObjetivo[objetivoIndex].subObjetivos){
//         const subObjetivo = {
//           subText,
//           check: false,
//         };
//         copiaObjetivo[objetivoIndex].subObjetivos.push(subObjetivo);
//         salvarObjetivos(copiaObjetivo)
      
//         const nuevoObjetivoPrincipales=[...objetivosPrincipales]
//         nuevoObjetivoPrincipales[objetivoIndex].subObjetivos.push(subObjetivo);
//         setObjetivosPrincipales(nuevoObjetivoPrincipales)
//       }

//         console.log("llamado a nuevosubObjetivos")
//         console.log(subText)
//       }
//     const check = (text)=>{
//       const copiaObjetivo=[...objetivos];
//       const ObjetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===text
//       )
//       copiaObjetivo[ObjetivoIndex].hecho=true
//       salvarObjetivos(copiaObjetivo)
//     }
//      const borrar = (text)=>{
//       const copiaObjetivo=[...objetivos];
//       const ObjetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===text
//       );
//       copiaObjetivo.splice(ObjetivoIndex, 1);
//       salvarObjetivos(copiaObjetivo)
//     }
//       // const subCheck = (objetivoText, subText)=>{
//       //     const copiaObjetivo=[...objetivos];
//       //     const objetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===objetivoText)
//       //     const subObjetivoIndex = copiaObjetivo[objetivoIndex].subObjetivos.findIndex((todo)=>todo.text===subText)
//       //     copiaObjetivo[objetivoIndex].subObjetivos[subObjetivoIndex].hecho=true
//       //     salvarObjetivos(copiaObjetivo);
//       //   }
//       //   const subBorrar = (objetivoText, subText)=>{
//       //     const copiaObjetivo=[...objetivos];
//       //     const objetivoIndex= copiaObjetivo.findIndex((todo)=>todo.text===objetivoText);
//       //     const subObjetivoIndex = copiaObjetivo[objetivoIndex].subObjetivos.findIndex((todo)=>todo.text===subText)
//       //     copiaObjetivo[objetivoIndex].subObjetivos.splice(subObjetivoIndex, 1);
//       //     salvarObjetivos(copiaObjetivo)
//       //   }
//     return (   
//     <ObjetivosContext.Provider value={{
//     loading,
//     error,
//     objetivosTotales,
//     objetivosLogrados,
//     searchValue,
//     setSearchValue,
//     busqueda,
//     check,
//     borrar,
//     openModal,
//     setOpenModal,
//     openModalSubTareas, 
//     setOpenModalSubTareas,
//     nuevoObjetivo,
//     openSubLis, 
//     setSubLis,
//     objetivos, 
//     nuevoSubObjetivo,
//     objetivosPrincipales,
// setObjetivosPrincipales   
//     }}>
//        {children}
//     </ObjetivosContext.Provider>
//     )
// }

// export {ObjetivosContext, ObjetivoProvider}


