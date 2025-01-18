import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        async function fetchPosts() {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            // console.log(res)
            setPosts(res.data);
        }
        fetchPosts()
    },[]);
  return (
    <div>
    <h1>Post Lists</h1>
    {posts.map((post)=>(
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

export default Posts