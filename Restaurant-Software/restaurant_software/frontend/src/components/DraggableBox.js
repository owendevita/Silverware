import React from 'react'
import Draggable from 'react-draggable'


const DraggableBox = () => {
  return (
    <Draggable
        defaultPosition={{x: 100, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}>
        <div>
            <div>This element is draggable!!</div>
        </div>
  </Draggable>

  )
}

export default DraggableBox