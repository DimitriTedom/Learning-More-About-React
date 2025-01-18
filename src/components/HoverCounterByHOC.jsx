import WithCounter from "./HOC/WithCounter";
const HoverCounterByHOC = ({counter, handleIncrement}) =>{
    return   <h2 onMouseOver={handleIncrement}>You've Hovered {counter} times</h2>
};

export default WithCounter(HoverCounterByHOC);