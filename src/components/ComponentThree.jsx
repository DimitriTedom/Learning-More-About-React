import React, { useContext } from 'react'
import CourseContext from './context/courseContext'

const ComponentThree = ({course}) => {
  const context = useContext(CourseContext);
  console.log(context)
  return (
    <div><p>Component Three</p>
    {/* <p>Course = {course} </p> */}
<p>Course = {context.course} </p>
    </div>
  )
}

export default ComponentThree