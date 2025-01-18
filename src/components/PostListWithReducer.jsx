import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    posts : [],
    error : ""
}; // if we hae many states to manage, we'll define them as an object
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
const PostListWithReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
        async function fetchPosts() {
            try {
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                // console.log(res)
                dispatch({type: "SUCCESS", data: res.data})
                // Note that we add dispatch function here beacuse we modify the state iff the user click on this button
            } catch (error) {
                dispatch({type: "ERROR", message: error.message})
            }
        }
        fetchPosts()
    },[]);
  return (
    <div>
 <h1>Post Lists</h1>
        {state.loading ? <h3>Loading...</h3> :state.error ? <h3>{state.error}</h3> :
        state.posts.map((post)=>(
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <hr />
                <br />
            </div>
        ))}
    </div>
  )
}

export default PostListWithReducer

/*So we now ask ou selves that when is the time to use Usestate and useReducer hook.
- When you have more than two states to manage, and that there're related, then we use useReducer
Otherwise, we use useState Hook
*/