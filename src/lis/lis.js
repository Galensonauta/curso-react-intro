import React from "react";
import "./lis.css";

function Lis(props){
    return(
      <section className="Lis">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.unidadesTotales)&& props.onEmpty()}
        {(!props.loading && !props.error)&& props.busquedaUnidades.map(props.render)}
        {(!!props.unidadesTotales && !props.busquedaUnidades.length)&& props.onEmptyNon(props.busquedaText)
        }
        <ul>
         {props.children}
      </ul>
      </section>      
      )
    }
export{Lis}  