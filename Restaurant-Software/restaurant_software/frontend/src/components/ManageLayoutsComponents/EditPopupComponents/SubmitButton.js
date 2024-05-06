import React from 'react'

const SubmitButton = ({setCurrentFocusedComponent, setPositionMap, positionMap, layoutID, seats, tableType, setPopup, tableNumber, index, type, content, labelType}) => {

  
  const handleClick = async() =>{
    if(type =="table" || type == "booth"){
      const newMap = new Map(positionMap);
      const info = newMap.get(layoutID)[index];
      newMap.get(layoutID)[index] = {type: tableType, seats: seats, table_number: tableNumber, x: info.x, y: info.y}
      setPositionMap(newMap);
      setCurrentFocusedComponent({layoutID: layoutID, index: index});
      setPopup(false);
    } else if (type == 'label-clear' || type == 'label-filled'){
      const newMap = new Map(positionMap);
      const info = newMap.get(layoutID)[index];
      newMap.get(layoutID)[index] = {type: labelType, label_content: content,  x: info.x, y: info.y}
      setPositionMap(newMap);
      setCurrentFocusedComponent({layoutID: layoutID, index: index});
      setPopup(false);
    }
  }
  
  return (
    <button className="popup-buttons" onClick={handleClick}>Edit</button>
  )
}

export default SubmitButton