import React, { useEffect, useState, useRef } from 'react'
import Draggable from 'react-draggable'
import booth from '../../../static/assets/booth.png'
import table from '../../../static/assets/table.png'
import divider from '../../../static/assets/divider.png'
import sideWall from '../../../static/assets/side-wall.png'
import backWall from '../../../static/assets/back-wall.png'
import InnerDraggableBox from './InnerDraggableBox'

const DraggableBox = ( { info, labelInfo, index, x_position, y_position, type, seats, setPositionMap, layoutID, positionMap, tableNumber, setCurrentFocusedComponent, currentFocusedComponent }) => {
 
  const [position, setPosition] = useState({ x: x_position, y: y_position });

  useEffect(() => {
    setPosition({ x: x_position, y: y_position });
  }, [layoutID, positionMap])

  useEffect(() =>{
    setCurrentFocusedComponent({layoutID: layoutID,index: index})
  }, [])
 
  return (
    
      <Draggable
          position={position}
          disabled={true}
          scale={1}
      >
              <div>
                  <InnerDraggableBox info={info} positionMap={positionMap} setCurrentFocusedComponent={setCurrentFocusedComponent} index={index} labelInfo={labelInfo} layoutID={layoutID} currentFocusedComponent={currentFocusedComponent} type={type} />
                
              </div>
    </Draggable>
    
  );
}

export default DraggableBox