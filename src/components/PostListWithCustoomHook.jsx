import React from 'react'
import useList from './hooks/UseList'

const url = "https://jsonplaceholder.typicode.com/posts";
const initialState = {
    loading : true,
    posts : [],
    error : ""
}
const PostListWithCustoomHook = () => {
    const state = useList(url,initialState)
    
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

export default PostListWithCustoomHook