import React, { useState, useEffect } from 'react'
import DraggableBox from './DraggableBox'
import SaveButton from './SaveButton'
import DeleteButton from './DeleteButton'

const Parent = () => {    
    let [position, setPosition] = useState({ x: 0, y: 0});
    let [layoutID, setLayoutID] = useState(null);
    let [hasLayout, setHasLayout] = useState(false);

    return (
    <div>
        <DraggableBox setPosition={setPosition} position={position} hasLayout={hasLayout} />
        <div></div>
        <SaveButton position={position} layoutID={layoutID} setLayoutID = {setLayoutID} hasLayout = {hasLayout} setHasLayout = {setHasLayout} />
        <div></div>
        <DeleteButton hasLayout = {hasLayout} layoutID={layoutID} setHasLayout={setHasLayout} setPosition={setPosition} />
    </div>
  )
}

export default Parent