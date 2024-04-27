import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'
import booth from '../../../static/assets/booth.png'
import table from '../../../static/assets/table.png'

const stylesheet = {
  image: {
    maxWidth: '100%',
    height: 'auto',
    userDrag: 'none',
    userSelect: 'none'
  },
  draggableBox: {
    maxWidth: '5%',
    height: 'auto',
    cursor: 'grab'
  }
};

const DraggableBox = ( { index, x_position, y_position, type, seats, setPositionMap, layoutID, positionMap }) => {
  
  const [position, setPosition] = useState({ x: x_position, y: y_position });

  const onStart = (event, ui) => {
    stylesheet.draggableBox.cursor = 'grabbing';
  }

  const onStop = (event, ui) => {
    setPosition({ x: ui.x, y: ui.y });
    stylesheet.draggableBox.cursor = 'grab';

    const newMap = new Map(positionMap);
    let layout = newMap.get(layoutID);
    let table = layout[index];
    table.x = ui.x;
    table.y = ui.y;
    layout[index] = table;
    newMap.set(layoutID, layout);
    setPositionMap(newMap);
  }

  const preventDragHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setPosition({ x: x_position, y: y_position });
  }, [layoutID])
  

  return (
    <Draggable
        position={position}
        grid={[25, 25]}
        scale={1}
        onStart={onStart}
        onStop={onStop}>
        <div style={stylesheet.draggableBox}>
            {type == "booth" && <img onDragStart={preventDragHandler}  style={stylesheet.image} src={booth} alt="booth" /> }
            {type == "table" && <img onDragStart={preventDragHandler} style={stylesheet.image} src={table} alt="table" /> }
            <label>{seats}</label>
        </div>
  </Draggable>

  )
}

export default DraggableBox