import React, {useState} from 'react'
import CloseButton from './CloseButton'
import Name from './Name'
import Password from './Passsword'
import EmployeeID from './EmployeeID'
import SubmitButton from './SubmitButton'

const Popup = ({setPopup, restaurantID}) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [employeeID, setEmployeeID] = useState(0);
  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create Owner Account</label>
          <CloseButton setPopup={setPopup}/>
          <Name setName={setFirstName} label={"First Name"}/>
          <Name setName={setLastName} label={"Last Name"}/>
          <EmployeeID setEmployeeID={setEmployeeID}/>
          <Password setPassword={setPassword}/>
          <SubmitButton
            firstName={firstName}
            lastName={lastName}
            passwordValue={password}
            employeeID={employeeID}
            restaurantID={restaurantID}
            />
        </div>
    </div>
  )
}

export default Popup