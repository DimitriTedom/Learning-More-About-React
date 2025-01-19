// import { useState } from 'react'
// import './App.css'
// import List from './components/List'
// import CounterApp from './components/CounterApp'
// import Form from './components/Form'
// import ClickCounterByHOC from './components/ClickCounterByHOC'
// import HoverCounterByHOC from './components/HoverCounterByHOC'
// import RegistrationForm from './components/RegistrationForm'
// import RenderProps from './components/RenderProps'
// import Counter from './components/Counter'
// import ClickCounterByRP from './components/ClickCounterByRP'
// import HoverCounterByRP from './components/HoverCounterByRP'
// import ComponentOne from './components/ComponentOne'
// import CourseContext from './components/context/courseContext'
// import UseEffectCom from './components/UseEffect'
// import Timer from './components/Timer'
// import Posts from './components/Posts'
// import UseCallback from './components/UseCallback'
// import UseMemo from './components/UseMemo'
// import UseRef from './components/UseRef'
// import UseReducer from './components/UseReducer'
// import ComplexeCounter from './components/ComplexeCounter'
// import PostListWithoutReducer from './components/PostListWithoutReducer'
// import PostListWithCustoomHook from './components/PostListWithCustoomHook'
// import { useState } from "react"
// import CssStyle from "./components/CssStyle"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import NavBar from "./components/NavBar"
import OrderConfirmation from "./components/pages/OrderConfirmation"
// import PostListWithReducer from './components/PostListWithReducer'
import NotFound from "./components/pages/NotFound"
import PostList from "./components/pages/PostList"
import PostDetail from "./components/pages/PostDetail"
import HotPosts from "./components/pages/HotPosts"
import ProductList from "./components/pages/ProductList"
import FeaturedProduct from "./components/pages/FeaturedProduct"
function App() {
  // const [toggle,setToggle] = useState(false);
  return (
    <>
  {/* <List/>
  <CounterApp/>
  <Form/> */}
  {/* <ClickCounterByHOC/> */}
  {/* <HoverCounterByHOC/> */}
  {/* <RegistrationForm/> */}
  {/* <RenderProps render={(isFavorite)=> (isFavorite ? "react" : "vue")}/> */}
    {/* <Counter>
    {(counter,handleIncrement)=> <ClickCounterByRP counter={counter} handleIncrement={handleIncrement}/>}
    </Counter>
    <br />
    <Counter>
    {(counter,handleIncrement)=> <HoverCounterByRP counter={counter} handleIncrement={handleIncrement}/>}
    </Counter> */}
    {/* <CourseContext.Provider value={{course:"vue"}}>
    <ComponentOne/>
    </CourseContext.Provider> */}
    {/* <button onClick={()=> setToggle(!toggle)}>Toggle</button>
    {toggle ? <CounterApp/> : <Timer/>} */}
    {/* <Posts/> */}
    {/* <UseEffectCom/>  */}
    {/* <Timer/> */}
    {/* <UseCallback/> */}
    {/* <UseMemo/> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}
    {/* <ComplexeCounter/>  */}
    {/* <PostListWithoutReducer/> */}
    {/* <PostListWithReducer/> */}
    {/* <PostListWithCustoomHook/> */}
    {/* <CssStyle/> */}
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="order-confirmation" element={<OrderConfirmation/>}/>
      <Route path="posts" element={<PostList/>}/>
      <Route path="posts/hot" element={<HotPosts/>}/>
      <Route path="products" element={<ProductList/>}/>
      <Route path="posts/:postId" element={<PostDetail/>}/>
      <Route path="*" element={<NotFound/>}/> 
      {/* in react-dom, the star(*) is used to match any route that is not matched by any other route. */}
      <Route path="productss/featured" element={<FeaturedProduct/>}/>
    </Routes>
    </>
  )
}

export default App
