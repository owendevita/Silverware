import React, { useEffect, useState } from 'react'
import Draggable from 'react-draggable'


const DraggableBox = ( { setPosition, position, hasLayout }) => {
  
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosition()
  }, [hasLayout]); // <-- empty array means 'run once'


  let getPosition = async () => {
    
    //
    // TO-DO: MAKE RESTAURANT ID CHANGE DEPENDING ON USER'S ASSIGNED RESTAURANT
    //
    let response = await fetch('/api/restaurants/1/layouts/');
    let data = await response.json();

    if(!data || data.length == 0) {
     
      setPosition({x: 0, y: 0});

    } else {

      const lastElement = data[data.length - 1];
      const {x, y} = lastElement.position;
      setPosition({x: x, y: y});

    }

    setLoading(false);


  }

  const onDrag = (event, ui) => {
    const { x, y } = ui;
    setPosition({ x, y });
  }


  if (loading){
    return <div> Loading... </div>
  }


  return (
    <Draggable
        position={position}
        grid={[25, 25]}
        scale={1}
        onStop={onDrag}>
        <div>
            <div>This element is draggable!!</div>
        </div>
  </Draggable>

  )
}

export default DraggableBox