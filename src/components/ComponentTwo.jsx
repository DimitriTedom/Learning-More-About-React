import React from 'react'
import ComponentThree from './ComponentThree'
// const ComponentTwo = ({course}) => {
//   return (
//     <div><p>Component Two</p>
//     <ComponentThree course={course}/>
//     </div>
//   )
// }

const ComponentTwo = () => {
  return (
    <div><p>Component Two</p>
    <ComponentThree/>
    </div>
  )
}

export default ComponentTwo