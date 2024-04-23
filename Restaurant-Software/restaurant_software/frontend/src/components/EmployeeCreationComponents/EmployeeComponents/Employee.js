import React, {useState, useEffect} from 'react'

const Employee = ({first_name, last_name, employee_id, permissions, pk}) => {
    
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
    </div>
  )
}

export default Employee