import React from 'react';
import { AppUi } from './AppUi';
import "./App.css"
import { ObjetivoProvider } from '../ObjetivosContext/ObjetivosContext';

function App() {
  return (
<ObjetivoProvider>
<AppUi  />
</ObjetivoProvider>
  )
}    
export default App;
