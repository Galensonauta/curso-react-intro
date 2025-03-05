import React from 'react';

function useLocalStorage(itemName, initialValue) {

  // const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
  // const {
  //   sincroItem,
  //   error,
  //   loading,
  //   item,
  // } = state;
  // const [sincroItem, setSincroItem] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);

        }
        // onExito(parsedItem);
        // setSincroItem(true);
        // setItem(parsedItem);
        setLoading(false);
      } catch(error) {
        setError(true);
        setLoading(false);
      }
    }, 3000);
  });
  
  const salvarItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
      // onSave(newItem);
    } catch(error) {
      setError(true);
    }
  };
  
  return {
    item,
    salvarItem,
    loading,
    error,
    // sincro,
  };
}
export { useLocalStorage };
  // //ACTION CREATOR: SE USAN PARA DECLARAR FUNCIONES QUE CONTENDRA NUESTRO DISPATCH
  // const onSincro =()=>{
  //   dispatch({
  //     type: actionTypes.sincro
  //   })
  // }
  // const onSave =(item)=>{
  //   dispatch({
  //     type: actionTypes.saveItem,
  //     payload: item,
  //   })
  // }
  // const onExito =(item)=>{
  //   dispatch({
  //     type: actionTypes.exito,
  //     payload: item,
  //   })
  // }
 
  //  const sincro =()=>{
  //   //  setLoading(true);
  //   //  setSincroItem(false);
  //   onSincro();
  //  }
// const initialState = ({initialValue})=>({
//   sincroItem: true,
//   error: false,
//   loading: true,
//   item: initialValue,
// });
// //ACTION TYPES: SE USAN PARA ALMACENAR LAS KEY DE NUESTRO REDUCER
// const actionTypes={
//    saveItem: "SAVEITEM",
//    sincro: "SINCRO",
//    exito:"EXITO",
 
// }
// //REDUCER USANDO OBJETOS
// const reducerObject=(state, payload) =>({
//    [actionTypes.saveItem]:{
//     ...state,
//     item: payload,
     
//    },
//    [actionTypes.sincro]:{
//     ...state,
//      sincroItem: false,
//      loading: true,
//    },
//    [actionTypes.exito]:{
//     ...state,
//     sincroItem: true,
//     loading: false,
//     error: false,
//     item: payload,
//    }
// })

// const reducer = (state,action)=>{
//   return(
//   reducerObject(state, action.payload)[action.type] || state);
// };
