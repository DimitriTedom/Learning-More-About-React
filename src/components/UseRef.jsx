import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [input,setInput] = useState({name: "",email: "",password: ""});

    const inputRef = useRef(null);
    useEffect(()=>{
        console.log(inputRef.current);
        inputRef.current.focus();
        inputRef.current.style.border = "5px solid red";
    },[]);

    const handleChange = (e) =>{
        setInput((prev)=>({...prev, [e.target.name]:e.target.value}));
    };
    // console.log(input);
  return (
    <div>
        <p>This is useRef example</p>
        <hr />
        <input type="text"name="name" value={input.name} onChange={handleChange} ref={inputRef} />
        <br />
        <input type="email" name="email" value={input.email} onChange={handleChange}/>

        <br />
        <input type="password" name="password" value={input.password} onChange={handleChange} />

    </div>
  )
}
/*Le hook useRef est un outil puissant dans React, permettant aux développeurs de gérer efficacement les références et les valeurs persistantes. Sa capacité à interagir avec le DOM sans provoquer de re-rendu en fait un choix privilégié pour diverses applications, notamment dans les animations, les transitions et le stockage temporaire de données. En comprenant bien son fonctionnement et ses applications, vous pouvez améliorer significativement la performance et la réactivité de vos composants React. */
export default UseRef