import React, { useReducer } from 'react'
const initialState = 0;

const reducer = (state,action)=>{
    // return new state 

    switch (action) {
        case "increment":
            return state+1;
            break;
        case "decrement":
            return state-1;
            break;
        default:
            return state;
            break;
    }
}
const UseReducer = () => {
   const [counter,dispatch] =  useReducer(reducer,initialState); //const [statename,function]. in our case, the state name is "counter"
  return (
    <div>
         <button onClick={()=> dispatch("increment")}>+</button> 
         {/* we add dispatch function here beacuse we modify the state iff the user click on this button */}
         <p>Counter - {counter}</p>
         <button onClick={()=> dispatch("decrement")}>-</button>
    </div>
  )
}

export default UseReducer

//This is used for state management and also an alternation of useState Hook
// Docs : https://youtu.be/rgp_iCVS8ys
/*
Introduction au Hook useReducer de React
Le hook useReducer est un outil puissant dans React qui permet de gérer des états complexes dans vos composants. Il est particulièrement utile lorsque vous avez plusieurs valeurs d'état qui dépendent d'une logique complexe, ce qui le rend souvent préférable à useState.
Syntaxe et fonctionnement
1. Syntaxe de base
Le hook useReducer prend deux arguments :
javascript
const [state, dispatch] = useReducer(reducer, initialState);
reducer : une fonction qui définit comment l'état change en fonction des actions.
initialState : l'état initial du composant.
2. La fonction reducer
La fonction reducer reçoit deux paramètres : l'état actuel et une action. Elle doit retourner le nouvel état basé sur le type d'action reçue.
javascript
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
3. Utilisation de dispatch
Pour modifier l'état, vous utilisez la fonction dispatch, qui envoie une action à la fonction reducer. Par exemple :
javascript
dispatch({ type: 'increment' });
Exemple pratique : Compteur
Voici un exemple simple d'application de compteur utilisant useReducer :
javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
};

export default Counter;
Dans cet exemple, le composant Counter utilise useReducer pour gérer l'état du compteur. Les boutons envoient des actions pour incrémenter ou décrémenter la valeur.
*/