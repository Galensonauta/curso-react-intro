import React from "react";
import { ObjetivosContext } from "../ObjetivosContext/ObjetivosContext";
import "./search.css"

function Search(){
const {
    searchValue,
    setSearchValue,
  }=React.useContext(ObjetivosContext)
{
   return(
    <input 
    placeholder="Buscar"
    value={searchValue}     
    onChange={(event)=>{
        setSearchValue(event.target.value);
    }}
    />
    );
    }}
export{Search}  