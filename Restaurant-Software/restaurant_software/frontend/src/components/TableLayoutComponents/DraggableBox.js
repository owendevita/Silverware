import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'

const DraggableBox = ( { style, hasLayout, layoutID }) => {
  
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosition()
  }, [hasLayout, layoutID]);


  let getPosition = async () => {

    if(!hasLayout || !layoutID || layoutID == null) {
     
      setPosition({x: 0, y: 0});

    } else {
      let response = await fetch(`/api/layouts/${layoutID}/`, {method: 'GET'});
      let data = await response.json();
      setPosition({x: data.position.x, y: data.position.y});
    }

    setLoading(false);


  }

  const onStart = () => {
    style.cursor = 'grabbing';
  }

  const onStop = (event, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
    style.cursor = 'grab';
  }


  if (loading){
    return <div> Loading... </div>
  }


  return (
    <Draggable
        position={position}
        grid={[25, 25]}
        scale={1}
        onStart={onStart}
        onStop={onStop}>
        <div style={style}>
            <div>This element is draggable!!</div>
        </div>
  </Draggable>

  )
}

export default DraggableBox