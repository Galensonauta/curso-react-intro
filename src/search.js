import "./search.css"
function Search(){
    return(
    <input 
    placeholder="Buscar"     
    onChange={(event)=>{
        console.log(event.target.value);
    }}
    />
    );
    }
export{Search}  