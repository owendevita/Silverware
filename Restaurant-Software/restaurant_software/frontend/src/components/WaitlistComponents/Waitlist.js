import React, { useState, useEffect } from 'react'
import WaitlistItem from './WaitlistItem';
import WaitlistBox from './WaitlistBox'
import WaitlistSubmit from './WaitlistSubmit'

const Waitlist = ({data}) => {

  let [partyName, setPartyName] = useState(null);
  const [parties, setParties] = useState(data.list)

  useEffect(() => {
    fetch(`/api/waitlists/${data.id}/`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json'
    },

      body: JSON.stringify({list:parties,restaurant:data.restaurant})
    }).then(response => {
      if (!response.ok) {
          console.log('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
  })
  .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
  });; 

  }, [parties, setParties])
  

  return (
    
    <div  className='waitlist-box'>
        <WaitlistBox setname={setPartyName} name={partyName}/>
        <WaitlistSubmit name={partyName} parties={parties} setParties={setParties}/>
        {data.list.map((party) => (
                    <WaitlistItem key={party.name} name={party.name} partySize={party.party_size} parties={parties} setParties={setParties} time={party.time}/>

            ))}

    </div>
  )
}

export default Waitlist