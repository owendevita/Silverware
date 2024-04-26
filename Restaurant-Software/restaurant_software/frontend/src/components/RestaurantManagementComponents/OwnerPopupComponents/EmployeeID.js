import React from 'react'

const EmployeeID = ({setEmployeeID}) => {
    const handleChange = (event) => {
        const idValue = event.target.value;

        setEmployeeID(parseInt(idValue));
    }
  
    return (
        <div>
            <label className="popup-labels">Employee ID:</label>
            <input className="popup-inputs" onChange={handleChange}/>
        </div>
  )
}

export default EmployeeID