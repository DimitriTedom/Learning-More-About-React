import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

// const initialState = {
//     loading : true,
//     posts : [],
//     error : ""
// }; // if we hae many states to manage, we'll define them as an object
const reducer = (state,action)=>{
    switch (action.type) {
        case "SUCCESS": //Note that in every cases, we are returning either an object or a variable
            return{
                loading: false,
                posts: action.data,
                error: ""
            };
            break;
        case "ERROR":
            return{
                loading: false,
                posts: [],
                error: action.message
            };
            break;
        default:
            return state;
            break;
    }
}
const UseList = (url,initialState) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        async function fetchPosts() {
            try {
                //"https://jsonplaceholder.typicode.com/posts"
                const res = await axios.get(url);
                // console.log(res)
                dispatch({type: "SUCCESS", data: res.data})
                // Note that we add dispatch function here beacuse we modify the state iff the user click on this button
            } catch (error) {
                dispatch({type: "ERROR", message: error.message})
            }
        }
        fetchPosts()
    },[url]);
  return state;
}

export default UseList