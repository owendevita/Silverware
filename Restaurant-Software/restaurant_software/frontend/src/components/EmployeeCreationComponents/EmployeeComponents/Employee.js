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
    <div>
        <div>First Name: {first_name}</div>
        <div>Last Name: {last_name}</div>
        <div>Employee ID: {employee_id}</div>
        <div>Permissions: {permissionString}</div>
        <EditButton pk={pk}/> <DeleteButton pk={pk} setList={setList} restaurantID={restaurantID}/> 
    </div>
  )
}

export default Employee