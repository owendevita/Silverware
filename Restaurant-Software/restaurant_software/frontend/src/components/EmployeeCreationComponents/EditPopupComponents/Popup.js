import React, {useState, useEffect} from 'react'
import CloseButton from './CloseButton'
import Name from './Name'
import Password from './Passsword'
import EmployeeID from './EmployeeID'
import Permission from './Permission'
import SubmitButton from './SubmitButton'

const Popup = ({setPopup, pk}) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [employeeID, setEmployeeID] = useState(0);
  const [restaurantID, setRestaurantID] = useState(null);

  const [manager, setManager] = useState(false);
  const [server, setServer] = useState(false);
  const [host, setHost] = useState(false);
  const [chef, setChef] = useState(false);

  const updateInfo = async() =>{
    let response = await fetch(`/api/employees/${pk}/`, {method: 'GET'});
    let data = await response.json();

    setFirstName(data.first_name);
    setLastName(data.last_name);
    setEmployeeID(data.employee_id);
    setRestaurantID(data.restaurant);

    Object.keys(data.permissions).forEach(key=>{
      if(key === 'manager' && data.permissions[key]){
        setManager(true);
      } else if(key === "server" && data.permissions[key]){
        setServer(true);
      } else if(key === "host" && data.permissions[key]){
        setHost(true);
      } else if(key === "chef" && data.permissions[key]){
        setChef(true);
      }

    });

  }

  useEffect(() => {
    updateInfo()
  }, [])
  
  
  return (
    <div className='popup-outer'>
        <div className="popup-inner">
            <label className="popup-titles">Edit Employee</label>
            <CloseButton setPopup={setPopup}/>
            <Name name={firstName} setName={setFirstName} label={"First Name"}/>
            <Name name={lastName} setName={setLastName} label={"Last Name"}/>
            <EmployeeID employeeID={employeeID} setEmployeeID={setEmployeeID}/>
            <Password setPassword={setPassword}/>
            <label className="permission-title">Permissions</label>
            <div className="permission-organizer">
              <Permission className={"permission-item"} checked={manager} setPermission={setManager} label={"Manager"}/> 
              <Permission className={"permission-item"} checked={server} setPermission={setServer} label={"Server"}/> 
              <Permission className={"permission-item"} checked={host} setPermission={setHost} label={"Host"}/> 
              <Permission className={"permission-item"} checked={chef} setPermission={setChef} label={"Chef"}/>
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
              pk={pk}
              restaurantID={restaurantID}
              />
        </div>
    </div>
  )
}

export default Popup