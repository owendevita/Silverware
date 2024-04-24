import React, {useState} from 'react'
import Popup from './CreatePopupComponents/Popup'

const CreateButton = ({restaurantID}) => {
  
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  return (
    <div>
        <button onClick={handleClick}>Create</button>
        {popup && <Popup setPopup={setPopup} restaurantID={restaurantID}/>}
    </div>
  )
}

export default CreateButton