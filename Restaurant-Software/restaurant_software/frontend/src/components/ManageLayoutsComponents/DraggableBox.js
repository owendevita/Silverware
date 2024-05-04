import React, { useEffect, useState, useRef } from 'react'
import Draggable from 'react-draggable'
import booth from '../../../static/assets/booth.png'
import table from '../../../static/assets/table.png'
import divider from '../../../static/assets/divider.png'
import sideWall from '../../../static/assets/side-wall.png'
import backWall from '../../../static/assets/back-wall.png'
import InnerDraggableBox from './InnerDraggableBox'


const DraggableBox = ( { labelInfo, index, x_position, y_position, type, seats, setPositionMap, layoutID, positionMap, tableNumber, setCurrentFocusedComponent, currentFocusedComponent }) => {
 
  const [position, setPosition] = useState({ x: x_position, y: y_position });
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [borderStyle, setBorderStyle] = useState('none');

  const onStart = (event, ui) => {
    setCurrentFocusedComponent({layoutID: layoutID,index: index});
    setIsGrabbing(true);
  }


  const onStop = (event, ui) => {
    setPosition({ x: ui.x, y: ui.y });
    setIsGrabbing(false);

    const newMap = new Map(positionMap);
    let layout = newMap.get(layoutID);
    let table = layout[index];
    table.x = ui.x;
    table.y = ui.y;
    layout[index] = table;
    newMap.set(layoutID, layout);
    setPositionMap(newMap);
    
  }

  useEffect(() => {
    setPosition({ x: x_position, y: y_position });
  }, [layoutID, positionMap])

 
  return (
    <Draggable
        position={position}
        scale={1}
        onStart={onStart}
        onStop={onStop}
    >
            <div className={isGrabbing ? 'draggableBoxGrabbing' : 'draggableBoxGrab'}>
              <InnerDraggableBox index={index} labelInfo={labelInfo} layoutID={layoutID} currentFocusedComponent={currentFocusedComponent} type={type} />
            </div>
  </Draggable>
  )
}


export default DraggableBox