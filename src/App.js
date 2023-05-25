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
  {text: "Universidad Chilecio",
  hecho: false}
];

function App() {
  return (
    <>
       <Coun comple={2} resul={50}/>
       <Search/>
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
