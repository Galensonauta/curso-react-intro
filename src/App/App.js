import React from 'react';
import { AppUi } from './AppUi';
import { useLocalStorage } from './useLocalStorage';
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

function App() {
    //Estdos hechos y derechos, con sus estados modificadores(los setNombredeEstado)
    const [objetivos, salvarObjetivos] = useLocalStorage("Objetivos_Vb", []);
    const [searchValue, setSearchValue]=React.useState("");
    //Los de abajo son estados derivados
    const objetivosTotales= objetivos.length
    const objetivosLogrados= objetivos.filter(todo=>todo.hecho).length;
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
    <AppUi
    objetivosTotales={objetivosTotales}
    objetivosLogrados={objetivosLogrados}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    busqueda={busqueda}
    check={check}
    borrar={borrar}
    />
  )
}    
export default App;
