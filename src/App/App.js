import React from 'react';
import { useApp } from './useApp';
import { Coun } from "../coun/coun";
import { Search } from "../search/search";
import { Lis } from "../lis/lis";
import {Unidad} from "../Unidad/Unidad"
import { UnidadesError } from "../UnidadesError/UnidadesError";
import { UnidadesCargando } from "../UnidadesCargando/UnidadesCargando";
import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
import { FormUnidad } from "../FormUnidad/FormUnidad";
import { Creador } from "../Creador/creador";
import { Modal } from "../Modal/Modal";
import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';

function App() {
   const{
   error,
   loading,
   busquedaUnidades,
   check,
   borrar,
   openModal,
   setOpenModal,
   unidadesTotales,
   unidadesTerminadas,
   searchValue,
   setSearchValue,
   agregarUn,
   sincroUnidades
   } = useApp();
   
   return (
    <React.Fragment> 
         <Search 
         searchValue={searchValue} 
         setSearchValue={setSearchValue} />
         <Coun 
         unidadesTerminadas={unidadesTerminadas} 
         unidadesTotales={unidadesTotales}/>
      <Lis
      error={error}
      loading={loading}
      busquedaUnidades={busquedaUnidades}
      
      onError={()=><UnidadesError/>}
      onLoading={()=><UnidadesCargando/>}

      onEmpty={()=><ObjetivosVacios/>}
      onEmptyNon={(busquedaText)=><p>No hay unidades con la palabra {busquedaText}</p>}
      busquedaText={searchValue} 
      unidadesTotales={unidadesTotales}
      render={(unidad,index)=>(
         <Unidad
            key={unidad.index} 
            text={unidad.text}
            hecho={unidad.hecho}
            onCheck={()=>check(unidad.text)}
            onBorrar={()=>borrar(unidad.text)}
            />
      )}
      
      />      
        {!!openModal && (
           <Modal>
           <FormUnidad 
           agregarUn={agregarUn}
           setOpenModal={setOpenModal}
           />
           </Modal>
           )}
       <Creador setOpenModal={setOpenModal}/>
       <ChangeAlertWithStorageListener
         sincroUnidades={sincroUnidades}
       />
        </React.Fragment>)
}
export default App;
{/* {error && <UnidadesError/>}
{(!loading && !busquedaUnidades.length) && <ObjetivosVacios/>}
{   loading && (                  
<UnidadesCargando/>
//   <UnidadesCargando/>
//   <UnidadesCargando/>
//   <UnidadesCargando/>
//   <UnidadesCargando/>
//   <UnidadesCargando/>

)
}
{busquedaUnidades.map(unidad=>(<Unidad
 key={unidad.text} 
 text={unidad.text}
 hecho={unidad.hecho}
 check={()=>check(unidad.text)}
 borrar={()=>borrar(unidad.text)}
 // clases={Array.isArray(unidades[unidad])?unidades[unidad]:[]}
 // id={unidad}
 />))}
</Lis> */}


