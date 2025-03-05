import React from "react";
import { Category } from "../category/category";
import { Coun } from '../coun/coun';
import { Search } from '../search/search';
import { Lis } from '../lis/lis';
import { Unidad } from '../Unidad/Unidad';
import { Creador } from '../Creador/creador';
import { UnidadesCargando } from '../UnidadesCargando/UnidadesCargando';
import { UnidadesError } from '../UnidadesError/UnidadesError';
import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
import { Modal } from "../Modal/Modal";
import { FormObjetivo } from "../FormUnidad/FormUnidad";
import { ObjetivosContext } from '../ObjetivosContext/ObjetivosContext';
import { CatVacias } from "../catVacias/catVacias";
import { CreadorCategory } from "../Creador/creadorCategory";
import {FormCategory }  from "../FormUnidad/formCategory"
function AppUi() {
   const {
      loading,
      error,                    
      busqueda,
      busquedaCate,
      check,
      borrar,
      openModal,
      openModalCategory, 
      setOpenModalCategory,
      setOpenModal,
      modalEdit,
      setmodalEdit,
      formData,
      setFormData,
      formDataCategory, 
      setFormDataCategory
     }=React.useContext(ObjetivosContext)
    return (
        <> 
             <Lis>             
            <CreadorCategory
              setOpenModalCategory={setOpenModalCategory}
              setFormDataCategory={setFormDataCategory}          
             />
             {(busquedaCate.length === 0) && <CatVacias/>}                                      
             {(busquedaCate.length > 0) &&  <Category/>}                                      
             <Creador
              setOpenModal={setOpenModal}
             setFormData={setFormData}
             />
             <Coun />
           <Search />
            {loading && (
               <>         
            <UnidadesCargando/>
            <UnidadesCargando/>            
            </>
            )
            }
            {error && <UnidadesError/>}
            {(!loading && busqueda.length === 0) && <ObjetivosVacios/>}
            {busqueda
             .slice() // Creamos una copia para no modificar el array original
             .sort((a, b) =>  new Date(a.deadline)-new Date(b.deadline)) // Orden descendente
            .map(todo=>(
            <Unidad 
            key={todo.name} 
            text={todo.text}
            name={todo.name}
            deadline={todo.deadline}
            category={todo.category}
            hecho={todo.hecho}
            check={()=>check(todo.text)}
            borrar={()=>borrar(todo.text)}       
            setOpenModal={setOpenModal}
                        modalEdit={modalEdit}
                        setmodalEdit={setmodalEdit}
                        formData={formData}
                        setFormData={setFormData}                    
            />
            ))      
         }
                     </Lis>
             {openModal && (
               <Modal container="modal"> 
             <FormObjetivo
             formData={formData}
             setFormData={setFormData}
             />
             </Modal>             
            )
            }
              {openModalCategory && (
               <Modal container="modalC"> 
             <FormCategory              
             formDataCategory={formDataCategory}
             setFormDataCategory={setFormDataCategory}          
             />
             </Modal>
            )}
        </>
      )
}
export { AppUi }
// import React from "react";
// import { useLocalStorage } from "./useLocalStorage";

// function useApp(){
//      const {
//         item:unidades,
//         saveItem:setUnidades,
//         sincro: sincroUnidades,
//         loading,
//         error,
//       } = useLocalStorage("unidadesV4", []);

     
//    const [searchValue, setSearchValue]=React.useState("");
//    const [openModal, setOpenModal] = React.useState(false);
   
//    console.log(localStorage.getItem("unidadesV4"))

//   const unidadesTerminadas= unidades.filter(unidad=>!!unidad.hecho).length;
//   const unidadesTotales= unidades.length;

//   let busquedaUnidades = [];

//   if(!searchValue.length>=1){
//    busquedaUnidades=unidades
//   } else {
//    busquedaUnidades= unidades.filter(unidad=>{
//     const UnidadText= unidad.text.toLowerCase();
//     const busquedaText=searchValue.toLowerCase();
//     return UnidadText.includes(busquedaText);
//    });
//   }
//   const agregarUn=(text)=>{
//     const copia=[...unidades];
//     copia.push({
//       hecho:false,
//       text,      
//     });
//     setUnidades(copia);
//   };
  

//    const check = (text)=> {
//      const index= unidades.findIndex(unidad=>unidad.text===text);
//      const copia=[...unidades];
//      copia[index].hecho= !copia[index].hecho;
//      setUnidades(copia);
//        }
//    const borrar = (text)=>{
//     const index= unidades.findIndex(unidad=>unidad.text===text);
//     const copia=[...unidades];
//     copia.splice(index, 1);
//     setUnidades(copia)
//    }
//    const state={
//     loading,
//     error,
//     unidadesTotales,
//     unidadesTerminadas,
//     searchValue,
//     unidades,
//     openModal,
//     busquedaUnidades,}
    
//     const actualizadores={
//     setSearchValue,
//     agregarUn,
//     check,
//     borrar,
//    setOpenModal,
//    sincroUnidades,
//    }
//   return {
//     state,
//     actualizadores,
//   }

// }
//   export { useApp };










