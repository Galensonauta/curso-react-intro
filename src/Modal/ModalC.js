import ReactDOM from 'react-dom';
import "./Modal.css"


function ModalC({children}){
  
   return ReactDOM.createPortal (
     <div className="Modal2">
        {children}
     </div>,
document.getElementById("modalC"));
}

export {ModalC};