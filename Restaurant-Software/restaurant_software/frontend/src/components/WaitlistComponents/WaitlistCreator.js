import React, { useState, useEffect } from 'react'
import WaitlistItem from './WaitlistItem';

const WaitlistCreator = () => {
    

    let [list, setList] = useState([]);

    useEffect(() => {
        getWaitlist()
      }, []); 
    
    const getWaitlist = async () => {
        
        let response = await fetch(`/api/waitlists/2/`, {method: 'GET'});
        let data = await response.json();

        setList(data.list);
    }
    
    return (
    <div>
       {list.map((data) => (
          <WaitlistItem name={data.name} partySize={data.party_size} />
        ))}
    </div>
  )
}

export default WaitlistCreator