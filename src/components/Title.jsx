import React, {memo} from 'react'

console.log("Rendering title...");
const Title = () => {
  return (
    <div>
        <h2>This is title Component</h2>
    </div>
  )
}

export default memo(Title)