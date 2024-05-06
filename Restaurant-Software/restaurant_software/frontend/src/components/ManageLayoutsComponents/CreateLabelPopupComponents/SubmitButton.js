import React from 'react'

const SubmitButton = ({setPositionMap, positionMap, layoutID, content, type, setPopup}) => {

  
  const handleClick = async() =>{
    const newMap = new Map(positionMap);
    let layout = newMap.get(layoutID);
    const newTable = {
        type: type,
        label_content: content,
        x: 0,
        y: 0,
    };

    layout.push(newTable);
    console.log("NEW LAYOUT:", layout);
    newMap.set(layoutID, layout);
    setPositionMap(newMap);
    setPopup(false);
  }
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Create</button>
  )
}

export default SubmitButton