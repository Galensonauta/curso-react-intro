import React from 'react';

import { Coun } from './coun';
import { Search } from './search';
import { Lis } from './lis';
import { TodoItem } from './todoItem';
import { Creador } from './creador';

const defaultOdos = [
  {text: "Universidad de Chilecito",
  hecho: true},
  {text: "ALURA/ONE",
  hecho: false},
  {text: "Maxi programa",
  hecho: false},
  {text: "Fullstack Platzi",
  hecho: false},
];

function App() {
  //Estdos hechos y derechos, con sus estados modificadores(los setNombredeEstado)
const [todos, setTodos]=React.useState(defaultOdos);
const [searchValue, setSearchValue]=React.useState("");
//Los de abajo son estados derivados
const objetivosLogrados= todos.filter(todo=>todo.hecho).length;
const objetivosTotales= todos.length
const busqueda = todos.filter(
  (todo)=>{
   return  todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  const check = (text)=>{
    const nuevoObjetivo=[...todos];
    const ObjetivoIndex= nuevoObjetivo.findIndex((todo)=>todo.text==text
    )
    nuevoObjetivo[ObjetivoIndex].hecho=true
    setTodos(nuevoObjetivo)
  }
  const borrar = (text)=>{
    const nuevoObjetivo=[...todos];
    const ObjetivoIndex= nuevoObjetivo.findIndex((todo)=>todo.text==text
    );
    nuevoObjetivo.splice(ObjetivoIndex, 1);
    setTodos(nuevoObjetivo)
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
