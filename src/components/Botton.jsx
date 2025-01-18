const Botton = ({handleClick,children}) => {
    console.log(`Rendering button ${children}`);
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Botton