import React from 'react'

const Permission = ({setPermission, label, checked}) => {

    const handleChange = (event) => {
        const permissionValue = event.target.checked;
        setPermission(permissionValue);
    }
  
    return (
        <div>
            <label className="popup-labels">{label}</label> <input className="popup-inputs" type="checkbox" checked={checked} onChange={handleChange}/>
        </div>
  )
}

export default Permission