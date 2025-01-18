// import "../assets/css/style.css";
import { useState } from "react"
import classes from "../assets/css/text.module.css" // This is css Module
const CssStyle = () => {
    const [color,setColor] = useState(false);
    const handleCick = () =>{
        setColor(!color);
    }
  return (
    <div className="container">
        <h1>Css Styling</h1>

        <div>
            <p className={color ? classes.container : classes.container1}>Css Styling</p> 
            {/* //This is Dynamic Css */}
            <button className={color ? classes.text : classes.text1} onClick={handleCick}>Change Color</button>
        </div>
    </div>
  )
}

export default CssStyle