import { Coun } from '../coun/coun';
import { Search } from '../search/search';
import { Lis } from '../lis/lis';
import { TodoItem } from '../todoItem/todoItem';
import { Creador } from '../creador/creador';
import { ObjetivosCargando } from '../objetivosCargando/ObjetivosCargando';
import { ObjetivosError } from '../objetivosError/ObjetivosError';
import { ObjetivosVacios } from '../objetivosVacios/ObjetivosVacios';
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
            {loading && (
               <>         
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            <ObjetivosCargando/>
            </>
            )
            }
            {error && <ObjetivosError/>}
            {(!loading && busqueda.length == 0) && <ObjetivosVacios/>}

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