import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const PostListWithoutReducer = () => {
    const [posts,setPosts] = useState([]); // to manage logs during loading
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);// To manage erros
    useEffect(()=>{
        async function fetchPosts() {
            try {
                setLoading(true); // This means that API request is loading true and we are going to set it to false at the end of loading
                const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
                // console.log(res)
                setPosts(res.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchPosts()
    },[]);
  return (
    <div>
 <h1>Post Lists</h1>
        {loading ? <h3>Loading...</h3> : error ? <h3>{error.message}</h3> :
        posts.map((post)=>(
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

export default PostListWithoutReducer