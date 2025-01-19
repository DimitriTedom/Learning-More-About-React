import { useSearchParams } from "react-router-dom"
const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // here, seraParams is an object and setSearchParams is a function that can be used to update the searchParams object
  const filter = searchParams.get("filter");
  console.log(filter);
  return (
    <div>
        <h2>{filter === "latest" ? "latest post list" : "All post list"}</h2>
        <p>Post 1</p>
        <p>Post 2</p>
        <p>Post 3</p>
        <button onClick={()=>setSearchParams({filter:"latest"})}>Latest posts</button>
        {/* // here, we are updating the searchParams object by adding a new key-value pair to it
        // And we could still add the query string to the URL by using the setSearchParams function */}
        <button onClick={()=> setSearchParams({})}>Reset</button>
    </div>
  )
}

export default PostList