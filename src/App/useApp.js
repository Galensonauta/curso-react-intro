import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useApp(){
     const {
        item:unidades,
        saveItem:setUnidades,
        sincro: sincroUnidades,
        loading,
        error,
      } = useLocalStorage("unidadesV4", []);

   const [searchValue, setSearchValue]=React.useState("");
   const [openModal, setOpenModal] = React.useState(false);
   
   console.log(localStorage.getItem("unidadesV4"))

  const unidadesTerminadas= unidades.filter(unidad=>!!unidad.hecho).length;
  const unidadesTotales= unidades.length;

  let busquedaUnidades = [];

  if(!searchValue.length>=1){
   busquedaUnidades=unidades
  } else {
   busquedaUnidades= unidades.filter(unidad=>{
    const UnidadText= unidad.text.toLowerCase();
    const busquedaText=searchValue.toLowerCase();
    return UnidadText.includes(busquedaText);
   });
  }
  const agregarUn=(text)=>{
    const copia=[...unidades];
    copia.push({
      hecho:false,
      text,
      
    });
    setUnidades(copia);
  };

   const check = (text)=> {
     const index= unidades.findIndex(unidad=>unidad.text===text);
     const copia=[...unidades];
     copia[index].hecho= !copia[index].hecho;
     setUnidades(copia);
       }
   const borrar = (text)=>{
    const index= unidades.findIndex(unidad=>unidad.text===text);
    const copia=[...unidades];
    copia.splice(index, 1);
    setUnidades(copia)
   }
  return {
    loading,
    error,
    unidadesTotales,
    unidadesTerminadas,
    searchValue,
    setSearchValue,
    busquedaUnidades,
    agregarUn,
    check,
    borrar,
   openModal,
   setOpenModal,
   unidades,
   sincroUnidades,
  }

}
  export { useApp };



// import React from "react";
// import { Coun } from '../coun/coun';
// import { Search } from '../search/search';
// import { Lis } from '../lis/lis';
// import {LisSub} from "../LisSub/LisSub"
// import { TodoItem } from '../todoItem/todoItem';
// import { TodoItemSub } from "../TodoItemSub/TodoItemSub";
// import { Creador } from '../creador/creador';
// import { CreadorSubTarea } from "../CreadorSubTarea/CreadorSubTarea";
// import { CreadorLisSub } from "../CreadorLisSub/CreadorLisSub";
// import { UnidadesCargando } from '../UnidadesCargando/UnidadesCargando';
// import { UnidadesError } from '../UnidadesError/UnidadesError';
// import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
// import { Modal } from "../Modal/Modal";
// import { ModalSubTareas } from "../ModalSubTareas/ModalSubTareas";
// import { ModalSubTareasLista } from "../ModalSubTareasLista/ModalSubTareasLista";
// import { FormObjetivo } from "../FormObejtivo/FormObjetivo";
// import { FormSubTarea } from "../FormSubTarea/FormSubTarea";
// import { ObjetivosContext } from '../ObjetivosContext/ObjetivosContext';
// function AppUi() {
//    const {
//       loading,
//       error,
//       objetivos,              
//       busqueda,
//       check,
//       subCheck,              
//       borrar,
//       subBorrar,   
//       openModal,
//       setOpenModal,
//       openModalSubTareas,
//       setOpenModalSubTareas,
//       setSubLis,
//       openSubLis,
//       nuevoObjetivo,
//       objetivosPrincipales,
//       setObjetivosPrincipales
//      }=React.useContext(ObjetivosContext)
//     return (
//         <> 
//            <Search />
//            <Coun />
//              <Lis>
//             {loading && (
//                <>         
//             <UnidadesCargando/>
//             <UnidadesCargando/>
//             <UnidadesCargando/>
//             <UnidadesCargando/>
//             <UnidadesCargando/>
//             <UnidadesCargando/>
//             </>
//             )
//             }
//             {error && <UnidadesError/>}
//             {(!loading && busqueda.length == 0) && <ObjetivosVacios/>}
//             {objetivos.map((todo)=>(
//             <TodoItem 
//             key={todo.text} 
//             text={todo.text}
//             hecho={todo.hecho}
//             check={()=>check(todo.text)}
//             borrar={()=>borrar(todo.text)}
//             subObjetivos={todo.subObjetivos}
//             botonCreadorSubLis={<CreadorLisSub setSubLis={setSubLis}/>}
//             botonCreadorSubTarea={<CreadorSubTarea setOpenModalSubTareas={setOpenModalSubTareas}/>}          
//             > <LisSub>
//             {objetivos.map((subObjetivo, indexSubObjetivo)=>(              
//             <TodoItemSub
//             key={subObjetivo.text} 
//             text={subObjetivo.text}
//            hecho={subObjetivo.hecho}
//           subCheck={()=>subCheck(subObjetivo.text, subObjetivo.text)}
//           subBorrar={()=>subBorrar(subObjetivo.text, subObjetivo.text)}
//           />))}
        
//          </LisSub>
        
//             </TodoItem>

//             ))}
        //      {openModalSubTareas && (
        // <ModalSubTareas><FormSubTarea/></ModalSubTareas>
        // )
        // } 
//             </Lis>
//              <Creador setOpenModal={setOpenModal}/>
//              {openModal && (<Modal> <FormObjetivo/></Modal>)}
//         </>
//       );
// }
// export { AppUi }







 {/* <CreadorSubTarea
           setOpenModalSubTareas={setOpenModalSubTareas}
           /> */}
           {/* <CreadorLisSub
                setSubLis={setSubLis}/> */}
               {/* {openSubLis &&(    
            <LisSub>
          {objetivos.map(subObjetivo=>(
            <TodoItemSub
            key={subObjetivo.text} 
            text={subObjetivo.text}
           hecho={subObjetivo.hecho}
          subCheck={()=>subCheck(subObjetivo.text, subObjetivo.text)}
          subBorrar={()=>subBorrar(subObjetivo.text, subObjetivo.text)}
          />))}
          </LisSub> )} */}

