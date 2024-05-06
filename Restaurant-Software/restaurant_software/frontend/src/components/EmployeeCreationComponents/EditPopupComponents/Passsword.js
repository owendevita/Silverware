import React from 'react'

const Passsword = ({setPassword}) => {
    const handleChange = (event) => {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
    }
  
    return (
        <div>
            <label className="popup-labels">New Passsword:</label>
            <input className="popup-inputs" type="password" onChange={handleChange}/>
        </div>
  )
}

export default Passsword