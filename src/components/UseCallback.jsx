import { useState } from "react"; 
import React from 'react'
import Title from "./Title";
import ShowCounter from "./ShowCounter";
const UseCallback = () => {
    const [counter1, setCounter1] = useState(0);
    cont [counter2,setCounter2] = useState(0);
    const handleIncrementByOne = () =>{
        setCounter1((oldCounter)=> oldCounter+1);
    }
    const handleIncrementByFive = () =>{
        setCounter1((oldCounter)=> oldCounter+5);
    }
  return (
    <div>
        <Title/>
        <ShowCounter counter={counter1} title="counter 1"/> 
        <Button/>
    </div>
  )
}

export default UseCallback