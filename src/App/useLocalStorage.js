import React from 'react';

function useLocalStorage(itemName, initialValue) {    
  const [state, dispatch ] = React.useReducer(reducer, initialState ({initialValue}));
  
  const {
    sincroItem,
    error,
    loading,
    item,
  }= state;

  //ACTION CREATORS

const onError=(error)=> dispatch({type: actionType.error, payload: error})
const onSuccess=(item)=>dispatch({type: actionType.success, payload: item})
const onSave=(item)=>dispatch({type: actionType.save, payload: item})
const onSincro=()=>dispatch({type: actionType.sincro})
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem= initialValue;
        } else {
          parsedItem= JSON.parse(localStorageItem);
          if(!Array.isArray(parsedItem)){
            parsedItem=initialValue
            localStorage.setItem(itemName, JSON.stringify(initialValue))
          }
        }
         onSuccess(parsedItem)
      } catch(error) {
         onError(error)        
      }
    }, 3000);
  },[sincroItem]);
  
  const saveItem = (newItem) => {
    try{
      const strigifieldItem=JSON.stringify(newItem);
      localStorage.setItem(itemName, strigifieldItem);
      onSave(newItem)
    } catch (error){
      onError(error)        
    }    
  };

  const sincro = () =>{onSincro()
  }
  
  return {
    item,
    saveItem,
    loading,
    error,
    sincro
  };
}
const initialState = ({initialValue})=> ({
 sincroItem: true,
 error: false,
 loading: true,
 item: initialValue,
});

const actionType = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincro: " SINCRO",
}

const reducerObject = (state, payload)=>({
[actionType.error]:{
  ...state,
  error: true,
},
[actionType.success]:{
  ...state,
  error: false,
  loading: false,
  sincro: true,
  item: payload,
},
[actionType.save]:{
  ...state,
  item: payload,
},
[actionType.sincro]:{
  ...state,
  loading: true,
  sincro: false,
  item: payload,
}
})

const reducer = (state, action)=>{
 return reducerObject(state, action.payload)[action.type]|| state;
}

export { useLocalStorage };

// import React from "react";

// function useLocalStorage(itemName, initialValue) {
 
//   const [item, setItem] = React.useState(() => {
//     try {
//       const localStorageItem = localStorage.getItem(itemName);
//       return localStorageItem ? JSON.parse(localStorageItem) : initialValue;
//     } catch (error) {
//       console.error("Error retrieving data from localStorage:", error);
//       return initialValue;
//     }
//   });
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(false);

//   React.useEffect(() => {
//     setTimeout(()=>{
//       try {
//         const localStorageItem= localStorage.getItem(itemName);
//         let parsedItem;

//         if(!localStorageItem){
//           localStorage.setItem(itemName, JSON.stringify(initialValue));
//           parsedItem=initialValue;        
//         }
//         else {
//           parsedItem=JSON.parse(localStorageItem);
//           setItem(parsedItem)
//         }
//         setLoading(false)
//            } catch (error) {
//                setLoading(false)
//                setError(true)
//       }
//       },2000)  
//     },[])
//  return { item, setItem, loading, error };
// }
// export {useLocalStorage}


// import React from "react";

// function useLocalStorage (itemName,initialValue){
//     const [item, setItem] = React.useState(initialValue);

//     const [loading, setLoading] = React.useState(true);
//     const [error, setError] = React.useState(false);

//     React.useEffect(()=>{
//       setTimeout(()=>{
//         try{
//           const localStorageItem = localStorage.getItem(itemName);
//           let parsedItem;
     
//          if (!localStorageItem) {
//             localStorage.setItem(itemName, JSON.stringify(initialValue));
//             parsedItem=initialValue;
//          }else{
//             parsedItem=JSON.parse(localStorageItem);
//             setItem(parsedItem)
//          }
//           setLoading(false)
//           } catch (error) {
//             setLoading(false)
//             setError(true)
//           }
//       },2000)
//     },[])
    
//     const salvarItem = (newItem)=>{
//       localStorage.setItem(itemName, JSON.stringify(newItem))
//       setItem(newItem);
//     }
//    return {item, salvarItem,loading,error}
// }

//   export { useLocalStorage}


  