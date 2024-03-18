import React, { useState, useEffect } from 'react'
import DraggableBox from './DraggableBox'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'
import DropdownMenuParent from './DropdownMenu/DropdownMenuParent'

const stylesheet = {
  delete_button: {
    backgroundColor: '#b90007'
  },
  draggable_box: {
    cursor: 'grab'
  }
};

const Parent = () => {    
    let [position, setPosition] = useState({ x: 0, y: 0});
    let [layoutID, setLayoutID] = useState(null);
    let [hasLayout, setHasLayout] = useState(false);

    return (
    <div>
        <DropdownMenuParent setPosition={setPosition} setHasLayout={setHasLayout} hasLayout={hasLayout} setLayoutID={setLayoutID} layoutID={layoutID}/>
        <div></div>
        <DraggableBox style={stylesheet.draggable_box} setPosition={setPosition} position={position} hasLayout={hasLayout} layoutID={layoutID} />
        <div></div>
        <SaveButton position={position} layoutID={layoutID} setLayoutID = {setLayoutID} hasLayout = {hasLayout} setHasLayout = {setHasLayout} />
        <div></div>
        <DeleteButton style={stylesheet.delete_button} hasLayout = {hasLayout} layoutID={layoutID} setHasLayout={setHasLayout} setPosition={setPosition} setLayoutID={setLayoutID} />
    </div>
  )
}

export default Parent