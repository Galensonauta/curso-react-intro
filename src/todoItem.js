function TodoItem(props){
    return(<li>
        <span>{props.hecho}</span>
        <p>{props.text}</p>
        <span>X</span>
        </li>);}
export{TodoItem};