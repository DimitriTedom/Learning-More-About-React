import { useState } from "react";
const WithCounter = (Component) =>{
    const NewComponent = () => {
            const [counter,setCounter] = useState(0);
        
            const handleIncrement = () =>{
                setCounter((oldCounter)=> oldCounter + 1);
            }

        return <Component counter={counter} handleIncrement={handleIncrement}/>
    }
    return NewComponent; 
}

export default WithCounter