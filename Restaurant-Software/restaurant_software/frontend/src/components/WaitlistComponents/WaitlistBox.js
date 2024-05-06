
import React, {useState} from 'react';

  const WaitlistBox = ({name, setName}) => {
  
    const handleInputChange = (event) => {
      const nameValue = event.target.value;
      setName(nameValue);
  
  }

  
  return (
   
    <div>
  
      
  </div>
  
  )
}

export default WaitlistBox
/*
<label className="waitlist-labels" htmlFor="name">Waitlist</label>
      <br/>
      <input id="userinput" className="wailist-inputs" type="text" value={name} name="name" required onChange={handleInputChange} placeholder="ENTER NAME"/>
      <input id="userinput" className="wailist-inputs" type="text" value={name} name="name" required onChange={handleInputChange} placeholder="ENTER PARTY SIZE"/>
      */