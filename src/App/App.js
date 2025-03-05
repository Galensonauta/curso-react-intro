import React from 'react';
import { ObjetivoProvider } from '../ObjetivosContext/ObjetivosContext';
import { AppUi } from './AppUi';

function App() {
  return (
    <ObjetivoProvider>
      <AppUi/>
    </ObjetivoProvider>
  );
}

export default App;
// import React from 'react';
// import { useApp } from './AppUi';
// import { Coun } from "../coun/coun";
// import { Search } from "../search/search";
// import { Lis } from "../lis/lis";
// import {Unidad} from "../Unidad/Unidad";

// import { UnidadesError } from "../UnidadesError/UnidadesError";
// import { UnidadesCargando } from "../UnidadesCargando/UnidadesCargando";
// import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
// import { FormUnidad } from "../FormUnidad/FormUnidad";

// import { Creador } from "../Creador/creador";
// import { Modal } from "../Modal/Modal";
// import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';


// function App() {
//    const {state, actualizadores}= useApp();
//    const{
//    error,
//    loading,
//    busquedaUnidades,
//    openModal,
//    unidadesTotales,
//    unidadesTerminadas,
//    searchValue,}=state;
//    const {
//    check,
//    setOpenModal, 
//    borrar,
//    setSearchValue,
//    agregarUn,
//    sincroUnidades,
//    } = actualizadores;
   
//    return (
//     <React.Fragment> 
//          <Search 
//          searchValue={searchValue} 
//          setSearchValue={setSearchValue} />
//          <Coun 
//          unidadesTerminadas={unidadesTerminadas} 
//          unidadesTotales={unidadesTotales}/>
//       <Lis
//       error={error}
//       loading={loading}
//       busquedaUnidades={busquedaUnidades}
      
//       onError={()=><UnidadesError/>}
//       onLoading={()=><UnidadesCargando/>}

//       onEmpty={()=><ObjetivosVacios/>}
//       onEmptyNon={(busquedaText)=><p>No hay unidades con la palabra {busquedaText}</p>}
//       busquedaText={searchValue} 
//       unidadesTotales={unidadesTotales}
//       render={(unidad)=>(
//          <Unidad
//             key={unidad.text} 
//             text={unidad.text}
//             hecho={unidad.hecho}
//             onCheck={()=>check(unidad.text)}
//             onBorrar={()=>borrar(unidad.text)}               
//          />
//       )
//    }
//       />      
//         {!!openModal && (
//            <Modal>
//            <FormUnidad 
//            agregarUn={agregarUn}
//            setOpenModal={setOpenModal} 
//            />
//            </Modal>
//            )}
          
//        <Creador setOpenModal={setOpenModal}/>
       
//        <ChangeAlertWithStorageListener
//          sincro={sincroUnidades}
//        />
//         </React.Fragment>)
// }
// export default App;
