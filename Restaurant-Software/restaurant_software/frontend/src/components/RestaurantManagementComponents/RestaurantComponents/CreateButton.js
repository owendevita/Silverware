import React, {useState} from 'react'
import Popup from '../OwnerPopupComponents/Popup'

const CreateButton = ({pk}) => {
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  return (
    <div>
        <button className="employee-edit-button" onClick={handleClick}>Create Owner Account</button>
        {popup && <Popup setPopup={setPopup} restaurantID={pk}/>}
    </div>
  )
}

export default CreateButton