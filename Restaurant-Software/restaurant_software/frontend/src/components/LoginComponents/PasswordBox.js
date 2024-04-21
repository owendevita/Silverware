import React from 'react'

const PasswordBox = ({password, setPassword}) => {
  
  const handleInputChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

  }
  
  return (
    <div>
      <label htmlFor="password">Password</label>
      <br/>
      <input type="password" id="password" name="password" value={password} minlength="8" required onChange={handleInputChange} />
  </div>
  )
}

export default PasswordBox