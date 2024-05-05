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
      <button className="edit-button" onClick={clickHandler}>
        Edit Selected Component
      </button>
    </div>
  ) : (
    <div>Loading..</div>
  )
}

export default EditButton