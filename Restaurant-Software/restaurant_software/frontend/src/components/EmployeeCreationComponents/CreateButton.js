import React, {useState} from 'react'
import Popup from './CreatePopupComponents/Popup'

const CreateButton = ({restaurantID}) => {
  
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  return (
    <div>
        <button className="employee-create-button" onClick={handleClick}>Create New Employee</button>
        {popup && <Popup setPopup={setPopup} restaurantID={restaurantID}/>}
    </div>
  )
}

export default CreateButton