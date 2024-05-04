import React, { useState, useEffect } from 'react'

const EditButton = ({ currentFocusedComponent, positionMap, setEditPopup }) => {
    const [info, setInfo] = useState(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])

    const clickHandler = () => {
      setEditPopup(true);
    }

  useEffect(() => {
    setInfo(positionMap.get(currentFocusedComponent.layoutID)[currentFocusedComponent.index])
  }, [currentFocusedComponent])
  

  return info ? (
    <div>
      <button onClick={clickHandler}>
        Edit Selected Component
      </button>
      {(info.type == "booth" || info.type == "table") && <label>Seats: {info.seats}</label>}
      {(info.type == "booth" || info.type == "table") && <label>Table Number: {info.table_number}</label>}
    </div>
  ) : (
    <div>Loading..</div>
  )
}

export default EditButton