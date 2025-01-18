import { useState } from 'react'
import './App.css'
import List from './components/List'
import CounterApp from './components/CounterApp'
import Form from './components/Form'
import ClickCounterByHOC from './components/ClickCounterByHOC'
import HoverCounterByHOC from './components/HoverCounterByHOC'
import RegistrationForm from './components/RegistrationForm'
import RenderProps from './components/RenderProps'
import Counter from './components/Counter'
import ClickCounterByRP from './components/ClickCounterByRP'
import HoverCounterByRP from './components/HoverCounterByRP'
import ComponentOne from './components/ComponentOne'
import CourseContext from './components/context/courseContext'
import UseEffectCom from './components/UseEffect'
import Timer from './components/Timer'
import Posts from './components/Posts'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'
import UseRef from './components/UseRef'
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
    <UseRef/>
    </>
  )
}

export default App
