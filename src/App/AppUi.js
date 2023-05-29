import { Coun } from '../coun/coun';
import { Search } from '../search/search';
import { Lis } from '../lis/lis';
import { TodoItem } from '../todoItem/todoItem';
import { Creador } from '../creador/creador';

function AppUi({
    loading,
    error,
    objetivosTotales,
    objetivosLogrados,
    searchValue,
    setSearchValue,
    busqueda,
    check,
    borrar,
 }) {
    return (
        <> 
           <Coun hecho={objetivosLogrados} total={objetivosTotales}/>
           <Search 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            
           />
           <Lis>
            {loading && <p>Cargando...</p>}
            {error && <p>Error!!</p>}
            {(!loading && busqueda.length == 0) && <p>Sin objetivos en la lista</p>}

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
export { AppUi }