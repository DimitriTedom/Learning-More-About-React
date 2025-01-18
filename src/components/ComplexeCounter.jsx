import React, { useReducer } from 'react'
const initialState = {
    counter: 0
};
const reducer = (state,action)=>{
    // return new state 

    switch (action.type) {
        case "increment":
            return {counter: state.counter + action.value};
            break;
        case "decrement":
            return {counter: state.counter - action.value};
            break;
        default:
            return state;
            break;
    }
}
const ComplexeCounter = () => {
   const [state,dispatch] =  useReducer(reducer,initialState); //const [statename,function]. in our case, the state name is "counter"
  return (
    <div>
         <button onClick={()=> dispatch({type: "increment", value: 2})}>+</button>
         <p>Counter - {state.counter}</p>
         <button onClick={()=> dispatch({type: "decrement", value: 3})}>-</button>
    </div>
  )
}

export default ComplexeCounter

//This is used for state management and also an alternation of useState Hook