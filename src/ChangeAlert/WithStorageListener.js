import React from "react";

function WithStorageListener(WrapperComponent){
return function WrapperComponentWithStorageListener(props){
    const [storageChange,setStorageChange]=React.useState(false);
    window.addEventListener("storage", (change)=>{
        if(change.key==="unidadesV4"){
            console.log("Hubo cambios en unidadesV4");
            setStorageChange(true)}      
    });
        
const toggleShow=()=>{
    props.sincro();
   setStorageChange(false);
}
    return <WrapperComponent
    show={storageChange}
    toggleShow={toggleShow}
    /> 

}}

export {WithStorageListener}

