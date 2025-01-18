import { useState,useEffect } from "react"

const UseEffectCom = () =>{
    const [counter,setCounter] = useState(0);

    const handleClick = () => {
        setCounter((oldCounter)=>oldCounter+1);
    }
    useEffect(()=>{
         console.log("Call this function in every render")
    });
    useEffect(()=>{
        console.log("Call this function in initial render")
    },[]);
    useEffect(()=>{
        console.log("Call the function when counter is changing")
    },[counter])
    return (
        <div>
            <p>UseEffect example</p>
            <button onClick={handleClick}>Click Counter</button>
            <p>Counter: {counter}</p>
        </div>
    )
}

export default UseEffectCom