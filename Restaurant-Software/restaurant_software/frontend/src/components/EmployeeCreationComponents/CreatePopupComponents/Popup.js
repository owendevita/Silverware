import React, {useState} from 'react'
import CloseButton from './CloseButton'
import Name from './Name'
import Password from './Passsword'
import EmployeeID from './EmployeeID'
import Permission from './Permission'
import SubmitButton from './SubmitButton'

const Popup = ({setPopup, restaurantID}) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [employeeID, setEmployeeID] = useState(0);

  const [manager, setManager] = useState(false);
  const [server, setServer] = useState(false);
  const [host, setHost] = useState(false);
  const [chef, setChef] = useState(false);
  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
          <label className="popup-titles">Create Employee</label>
          <CloseButton setPopup={setPopup}/>
          <Name setName={setFirstName} label={"First Name"}/>
          <Name setName={setLastName} label={"Last Name"}/>
          <EmployeeID setEmployeeID={setEmployeeID}/>
          <Password setPassword={setPassword}/>
          <label className="permission-title">Permissions</label>
          <div className="permission-organizer">
            <Permission className={"permission-item"} setPermission={setManager} label={"Manager"}/> 
            <Permission className={"permission-item"} setPermission={setServer} label={"Server"}/> 
            <Permission className={"permission-item"} setPermission={setHost} label={"Host"}/> 
            <Permission className={"permission-item"} setPermission={setChef} label={"Chef"}/>
          </div>
          <SubmitButton
            firstName={firstName}
            lastName={lastName}
            passwordValue={password}
            employeeID={employeeID}
            isManager={manager}
            isServer={server}
            isHost={host}
            isChef={chef}
            restaurantID={restaurantID}
            />
        </div>
    </div>
  )
}

export default Popup