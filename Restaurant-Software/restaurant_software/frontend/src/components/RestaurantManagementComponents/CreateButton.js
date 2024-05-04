import React, {useState} from 'react'
import Popup from './CreatePopupComponents/Popup'

const CreateButton = ({restaurantID}) => {
  
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  return (
    <div>
        <button className="employee-create-button" onClick={handleClick}>Create New Restaurant</button>
        {popup && <Popup setPopup={setPopup} />}
    </div>
  )
}

export default CreateButton