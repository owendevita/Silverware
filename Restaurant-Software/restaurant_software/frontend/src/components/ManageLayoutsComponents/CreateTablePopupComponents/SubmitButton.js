import React from 'react'

const SubmitButton = ({setPositionMap, positionMap, layoutID, seats, tableType, setPopup, tableNumber}) => {

  
  const handleClick = async() =>{
    const newMap = new Map(positionMap);
    let layout = newMap.get(layoutID);
    const newTable = {
        type: tableType,
        seats: seats,
        table_number: tableNumber,
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