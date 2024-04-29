import React, {useState} from 'react'
import Popup from './CreateWallPopupComponents/Popup'

const CreateTableButton = ({setPositionMap, positionMap, layoutID}) => {
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  
  return (
    <div>
      <button onClick={handleClick}>Add New Wall</button>
      {popup && <Popup setPopup={setPopup} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>}
    </div>
  )
}

export default CreateTableButton