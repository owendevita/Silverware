import React from 'react'

const PasswordBox = () => {
  return (
    <div>
      <label htmlFor="password">Password:   </label>
      <input type="password" id="password" name="password" minlength="8" required />
  </div>
  )
}

export default PasswordBox