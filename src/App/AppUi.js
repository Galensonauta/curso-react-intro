import React from "react";
import { Coun } from '../coun/coun';
import { Search } from '../search/search';
import { Lis } from '../lis/lis';
import { TodoItem } from '../todoItem/todoItem';
import { Creador } from '../creador/creador';
import { ObjetivosCargando } from '../objetivosCargando/ObjetivosCargando';
import { ObjetivosError } from '../objetivosError/ObjetivosError';
import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
import { ObjetivosContext } from '../ObjetivosContext/ObjetivosContext';
import { Modal } from "../Modal/Modal";
function AppUi() {
   const {
      loading,
      error,              
      busqueda,
      check,              
      borrar,   
      openModal,
      setOpenModal,          
     }=React.useContext(ObjetivosContext)
    return (
        <> 
           <Coun />
           <Search />
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
            />)}
             </Lis>
             <Creador />
              {openModal && (
               <Modal>
                  La funcionalidad de agregar objetivos
               </Modal>
              )}
        </>
      );
}
export { AppUi }




