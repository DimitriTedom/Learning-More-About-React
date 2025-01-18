import { memo } from "react";

const Botton = ({handleClick,children}) => {
    console.log(`Rendering button ${children}`);
  return (
    <button onClick={handleClick} className="bg-[#1243] rounded-md">{children}</button>
  )
}

export default memo(Botton)