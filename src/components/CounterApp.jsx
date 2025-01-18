import { useState } from "react";

const CounterApp = () => {
    const [counter,setCounter] = useState(0);

    const handleIncrement = () =>{
        setCounter((count)=>( count +1));
    }
    
    const handleDecrement = () =>{
        setCounter((count)=>(count-1));
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{counter}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default CounterApp