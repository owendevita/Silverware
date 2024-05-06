import React, {useState} from 'react'
import Popup from './CreateTablePopupComponents/Popup'

const CreateTableButton = ({setPositionMap, positionMap, layoutID}) => {
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  
  return (
    <div>
      <button className="new-component-button" onClick={handleClick}>Add New Table</button>
      {popup && <Popup setPopup={setPopup} setPositionMap={setPositionMap} positionMap={positionMap} layoutID={layoutID}/>}
    </div>
  )
}

export default CreateTableButton