import { useState,useCallback } from "react"; 
import React from 'react'
import Title from "./Title";
import ShowCounter from "./ShowCounter";
import Botton from "./Botton";
const UseCallback = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    //So useCallback will enable me to render only components(used in the case of very large components) whode dependency has changed.
    //We can observed the differnce in the console.log when we use useCallback and not
    const handleIncrementByOne = useCallback(()=>{
      setCounter1((oldCounter)=> oldCounter+1);

    },[]);
    const handleIncrementByFive = useCallback(() =>{
        setCounter2((oldCounter)=> oldCounter+5);
    },[]);
  return (
    <div>
        <Title/>
        <ShowCounter counter={counter1} title="counter 1"/> 
        <Botton handleClick={handleIncrementByOne}>Increment By One</Botton>
        <hr />
        <ShowCounter counter={counter2} title="Counter 2"/>
        <Botton handleClick={handleIncrementByFive}>Increment by Five</Botton>
    </div>
  )
}

export default UseCallback