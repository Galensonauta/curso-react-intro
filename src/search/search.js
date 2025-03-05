import React from "react";
import "./search.css"
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";

function Search(){
    const{
    searchValue,
    setSearchValue
}=React.useContext(ObjetivosContext)
   return(
    <input 
    className="searchInput"
    placeholder="Buscar"
    value={searchValue}     
    onChange={(event) => {
     setSearchValue(event.target.value);
    }}/>
    );
    }
export{Search}  