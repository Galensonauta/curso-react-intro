import React from "react";
import { Coun } from '../coun/coun';
import { Search } from '../search/search';
import { Lis } from '../lis/lis';
import {LisSub} from "../LisSub/LisSub"
import { TodoItem } from '../todoItem/todoItem';
import { TodoItemSub } from "../TodoItemSub/TodoItemSub";
import { Creador } from '../creador/creador';
import { CreadorSubTarea } from "../CreadorSubTarea/CreadorSubTarea";
import { CreadorLisSub } from "../CreadorLisSub/CreadorLisSub";
import { ObjetivosCargando } from '../objetivosCargando/ObjetivosCargando';
import { ObjetivosError } from '../objetivosError/ObjetivosError';
import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
import { Modal } from "../Modal/Modal";
import { ModalSubTareas } from "../ModalSubTareas/ModalSubTareas";
import { ModalSubTareasLista } from "../ModalSubTareasLista/ModalSubTareasLista";
import { FormObjetivo } from "../FormObejtivo/FormObjetivo";
import { FormSubTarea } from "../FormSubTarea/FormSubTarea";
import { ObjetivosContext } from '../ObjetivosContext/ObjetivosContext';
function AppUi() {
   const {
      loading,
      error,              
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
      setSubLis,
      openSubLis,
     }=React.useContext(ObjetivosContext)
    return (
        <> 
           <Search />
           <Coun />
             <Lis>
            {loading && (
               <>         
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            </>
            )
            }
            {error && <ObjetivosError/>}
            {(!loading && busqueda.length == 0) && <ObjetivosVacios/>}
            {busqueda.map(todo=>
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            hecho={todo.hecho}
            check={()=>check(todo.text)}
            borrar={()=>borrar(todo.text)}            
            >
                          <>
            
           <CreadorSubTarea
           setOpenModalSubTareas={setOpenModalSubTareas}
           />
            <CreadorLisSub
            setSubLis={setSubLis}/>
            </>
            </TodoItem>
            )}
             </Lis>
             <Creador 
             setOpenModal={setOpenModal}/>
             {openModal && (
             <Modal>
               <FormObjetivo/>    
            </Modal>
              )}
              {openModalSubTareas && (
             <ModalSubTareas>
               <FormSubTarea />
            </ModalSubTareas>
              )}   
              {openSubLis && (
   <ModalSubTareasLista>
   <LisSub>
    {subBusqueda.map(todo=>
 <TodoItemSub 
 key={todo.text} 
 text={todo.text}
 hecho={todo.hecho}
 subCheck={()=>subCheck(todo.text)}
 subBorrar={()=>subBorrar(todo.text)}            
 >
 </TodoItemSub>)}
 </LisSub>      
 </ModalSubTareasLista>
 )}   
        </>
      );
}
export { AppUi }









