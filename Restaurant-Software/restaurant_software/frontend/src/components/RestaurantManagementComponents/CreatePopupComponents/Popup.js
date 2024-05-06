import React, {useState} from 'react'
import CloseButton from './CloseButton'
import Name from './Name'
import SubmitButton from './SubmitButton'

const Popup = ({setPopup}) => {
  
  const [name, setName] = useState("");

  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create Restaurant</label>
          <CloseButton setPopup={setPopup}/>
          <Name setName={setName} label={"Name"}/>
          <SubmitButton
            name={name}
            />
        </div>
    </div>
  )
}

export default Popup