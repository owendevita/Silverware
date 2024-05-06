import React, {useState} from 'react'
import Popup from '../EditPopupComponents/Popup'

const EditButton = ({pk}) => {
  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(!popup);
  }
  
  return (
    <div>
        <button className="employee-edit-button" onClick={handleClick}>Edit</button>
        {popup && <Popup setPopup={setPopup} pk={pk}/>}
    </div>
  )
}

export default EditButton