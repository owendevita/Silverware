import React from 'react'

const SubmitButton = ({setPositionMap, positionMap, layoutID, seats, tableType, setPopup}) => {

  
  const handleClick = async() =>{
    const newMap = new Map(positionMap);
    let layout = newMap.get(layoutID);
    const newTable = {
        type: tableType,
        seats: '',
        x: 0,
        y: 0,
    };

    layout.push(newTable);
    newMap.set(layoutID, layout);
    setPositionMap(newMap);
    setPopup(false);
  }
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Create</button>
  )
}

export default SubmitButton