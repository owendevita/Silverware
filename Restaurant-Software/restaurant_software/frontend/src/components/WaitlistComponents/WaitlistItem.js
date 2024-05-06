import React, { useState, useEffect } from 'react'
import DeleteButton from './DeleteButton'

const WaitlistItem = ({name, partySize, parties, setParties, time}) => {

  let [partyName, setPartyName] = useState(null);
  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     let dateDifference = new Date() - new Date(time);
     const minuteDifference = Math.round(((dateDifference % 86400000) % 3600000) / 60000)
     setTimeDifference(minuteDifference);

    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <label className="party-content-title">Name: </label> <label className="party-content-label">{name} </label>
        <label className="party-content-title"> Party Size: </label> <label className="party-content-label">{partySize} </label>
        <label className="party-content-title"> Time Since Check-In: </label> <label className="party-content-label">{timeDifference} </label>
        <DeleteButton parties={parties} partySize={partySize} name={name} setParties={setParties} />
    </div>
  )
}

export default WaitlistItem