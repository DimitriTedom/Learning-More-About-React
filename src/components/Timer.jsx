import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer] = useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTimer((new Date()));
        },1000)// In every 1s, this setTimer function will be called so it can update th value of timer
        return () => {
            console.log("Cleanup function")
        };
    },[])//only initial render to be called by this useEffect callback function
  return (
    <div>
        <p>Timer Example</p>
        <p>{timer.toLocaleTimeString()}</p>
    </div>
  )
}

export default Timer