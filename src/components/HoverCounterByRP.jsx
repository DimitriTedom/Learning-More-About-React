import React from 'react'

const HoverCounterByRP = ({counter,handleIncrement}) => {
  return (
    <button onMouseOver={handleIncrement}>hovered {counter} times</button>
  )
}

export default HoverCounterByRP