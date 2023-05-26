import { Coun } from './coun';
import React from 'react';

import { Search } from './search';
import { Lis } from './lis';
import { TodoItem } from './todoItem';
import { Creador } from './creador';

const defaultOdos = [
  {text: "Ir al gm",
  hecho: true},
  {text: "Curso plazi",
  hecho: false},
  {text: "Maxi programa",
  hecho: false},
  {text: "Universidad Chilecito",
  hecho: false},
  {text: "Limpiar casa",
  hecho: true}
];

function App() {
  //Estdos hechos y derechos, con sus estados modificadores(los setNombredeEstado)
const [todos, setTodos]=React.useState(defaultOdos);
const [searchValue, setSearchValue]=React.useState("");
//Los de abajo son estados derivados
const objetivosLogrados= todos.filter(todo=>todo.hecho).length;
const objetivosTotales= todos.length
console.log("Los usuarios buscaron "+searchValue);
  return (
    <> 
       <Coun hecho={objetivosLogrados} total={objetivosTotales}/>
       <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
       />
       <Lis>
        {defaultOdos.map(odo=>
        <TodoItem key={odo.text} 
        text={odo.text}
        hecho={odo.hecho}
        />)}
        </Lis>
       <Creador /> 
    </>
  );
}    


export default App;
