import React from 'react'
import ComponentTwo from './ComponentTwo'
// const ComponentOne = ({course}) => {
//   return (
//     <div><p>Component One</p>
//     <ComponentTwo course={course}/>
//     </div>

//   )
// }

const ComponentOne = () => {
  return (
    <div><p>Component One</p>
    <ComponentTwo/>
    </div>

  )
}
export default ComponentOne