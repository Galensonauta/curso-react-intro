import React from "react";
import "./search.css"

function Search({searchValue,setSearchValue}){
const onSearchValueChange= (event)=>{
    setSearchValue(event.target.value)
}
   return(
    <input 
    placeholder="Buscar"
    value={searchValue}     
    onChange={onSearchValueChange}
    />
    );
    }
export{Search}  