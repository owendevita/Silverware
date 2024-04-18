import React from 'react'

const EmployeeIDBox = ({employeeID, setEmployeeID}) => {

  const handleInputChange = (event) => {
    const employeeIDValue = event.target.value;
    setEmployeeID(employeeIDValue);
  }

  return (
    <div>
      <label htmlFor="employee_id">Employee ID</label>
      <br/>
      <input type="text" id="employee_id" value={employeeID} name="employee_id" onChange={handleInputChange}/>
    </div>
  )
}

export default EmployeeIDBox