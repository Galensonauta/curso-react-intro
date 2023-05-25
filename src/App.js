import { Coun } from './coun';
import { Search } from './search';
import { Lis } from './lis';
import { TodoItem } from './todoItem';
import { Creador } from './creador';
import React from 'react';
import './App.css';

const defaultOdos = [
  {Text: "Ir al gm",
  hecho: false},
  {Text: "Curso plazi",
  hecho: false},
  {Text: "Maxi programa",
  hecho: false},
  {Text: "Universidad Chilecio",
  hecho: false}
];

function App() {
  return (
    <React.Fragment>
       <Coun comple={2} resul={50}/>
       <Search/>

       <Lis>
        {defaultOdos.map(odo=>
        <TodoItem/>)}
        
       </Lis>

        <Creador />
    </React.Fragment>
  );
}    

export default App;
