import React from 'react';

import { Coun } from './coun';
import { Search } from './search';
import { Lis } from './lis';
import { TodoItem } from './todoItem';
import { Creador } from './creador';

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

function useLocalStorage (itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
     localStorage.setItem(itemName, JSON.stringify(initialValue));
     parsedItem=initialValue;
  }else{
     parsedItem=JSON.parse(localStorageItem);
  }
const [item, setItem] = React.useState(parsedItem);
  const salvarItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }
 return [item, salvarItem]
}

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
    const ObjetivoIndex= nuevoObjetivo.findIndex((todo)=>todo.text==text
    )
    nuevoObjetivo[ObjetivoIndex].hecho=true
    salvarObjetivos(nuevoObjetivo)
  }
  const borrar = (text)=>{
    const nuevoObjetivo=[...objetivos];
    const ObjetivoIndex= nuevoObjetivo.findIndex((todo)=>todo.text==text
    );
    nuevoObjetivo.splice(ObjetivoIndex, 1);
    salvarObjetivos(nuevoObjetivo)
  }
  return (
    <> 
       <Coun hecho={objetivosLogrados} total={objetivosTotales}/>
       <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        
       />
       <Lis>
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
    </>
  );
}    
export default App;
