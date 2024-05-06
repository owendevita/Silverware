
import React, { useState, useEffect } from 'react';


const SubmitButton = ({ parties, setParties }) => {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState('');

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {

    const newParty = { name: name, party_size: partySize, time:currentTime};

    console.log(newParty);

    setParties(prevParties => [...prevParties, newParty]);

    setName('');
    setPartySize('');

    window.location.reload();
  };

  return (
    <div>
      <input type="text" className="wailist-inputs" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
      <input type="text" className="wailist-inputs" placeholder="Enter party size" value={partySize}  onChange={e => setPartySize(e.target.value)}/>
      <button className="waitlist-buttons" type="submit" onClick={handleClick}>ADD</button>
    </div>
  );
};

export default SubmitButton;
