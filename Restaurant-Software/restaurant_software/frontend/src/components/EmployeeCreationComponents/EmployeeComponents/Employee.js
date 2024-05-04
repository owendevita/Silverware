import React, {useState, useEffect} from 'react'
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

const Employee = ({first_name, last_name, employee_id, permissions, pk, setList, restaurantID}) => {
    
    const [permissionString, setPermissionString] = useState("");

    const permissionsToString = (permissions) => {
        return Object.keys(permissions)
          .filter(key => permissions[key]) // Filter out keys with false values
          .join(', ');
      };

    useEffect(() => {
        setPermissionString(permissionsToString(permissions));
    }, [])
    

  
    return (
    <div className="inner-box">
        <label className="box-title-label">First Name: </label> <label className="box-content-label">{first_name}</label>
        <label className="box-title-label">Last Name: </label> <label className="box-content-label">{last_name}</label>
        <label className="box-title-label">Employee ID: </label> <label className="box-content-label">{employee_id}</label>
        <label className="box-title-label">Permissions: </label> <label className="box-content-label">{permissionString}</label>
        <EditButton pk={pk}/> <DeleteButton pk={pk} setList={setList} restaurantID={restaurantID}/> 
    </div>
  )
}

export default Employee