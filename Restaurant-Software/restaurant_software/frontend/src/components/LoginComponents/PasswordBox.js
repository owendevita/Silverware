import React from 'react'

const PasswordBox = ({password, setPassword}) => {
  
  const handleInputChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);

  }
  
  return (
    <div>
      <label className="login-labels" htmlFor="password">Password</label>
      <br/>
      <input className="login-inputs" type="password" id="password" name="password" value={password} minlength="8" required onChange={handleInputChange} />
  </div>
  )
}

export default PasswordBox