import React, {useState} from 'react'
import Popup from './CreateLabelPopupComponents/Popup'

const CreateLabelButton = ({setPositionMap, positionMap, layoutID}) => {
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  
  return (
    <div>
      <button className="new-component-button" onClick={handleClick}>Add New Label</button>
      {popup && <Popup setPopup={setPopup} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>}
    </div>
  )
}

export default CreateLabelButton