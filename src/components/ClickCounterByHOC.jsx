  import WithCounter from "./HOC/WithCounter";
const ClickCounterByHOC = ({counter,handleIncrement}) =>{

    return(
        <>
        <button onClick={handleIncrement}>You've Clicked {counter} times</button>
        </>
    )
}

export default WithCounter(ClickCounterByHOC);