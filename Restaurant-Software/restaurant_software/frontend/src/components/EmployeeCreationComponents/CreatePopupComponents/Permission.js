import React from 'react'

const Permission = ({setPermission, label}) => {

    const handleChange = (event) => {
        const permissionValue = event.target.checked;
        setPermission(permissionValue);
    }
  
    return (
        <div>
            <label className="popup-labels">{label}</label> <input className="popup-checkboxes" type="checkbox" onChange={handleChange}/>
        </div>
  )
}

export default Permission