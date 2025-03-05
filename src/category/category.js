import React from "react"
import {BorrarIcon} from "../Icono/BorrarIcon"
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext"
import "./category.css"

function Category(){
    const {
        borrarCate,
        busquedaCate,
        setSearchValue,
    }= React.useContext(ObjetivosContext)
    return (
        <div className="category">
            <button
            className="category-button"
            onClick={
                ()=>{
                    setSearchValue("")
                }
            }
            >Todas las categorias
            </button>
            {busquedaCate.map(cat=>(                
                    <button
                        className='category-button button1'
                        key={cat.name}
                        onClick={() => {
                            setSearchValue(cat.name)
                        } }
                    >{cat.name}
                    <BorrarIcon
                    borrar={() => borrarCate(cat.name)} />
                    </button>
                                                                                                                   
        ))  }   
       
                  
        </div>           
    )
}               
export{Category}

