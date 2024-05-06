import React, { useState, useEffect } from 'react'
import Waitlist from './Waitlist';

const WaitlistCreator = ({restaurantID}) => {

    let [waitlists, setWaitlists] = useState([]);

    const getWaitlist = async () => {

        let response = await fetch(`/api/restaurants/${restaurantID}/waitlists/`, {method: 'GET'});
        let data = await response.json();

        setWaitlists(data);

    }

    useEffect(() => {
        getWaitlist();
    }, [])
    

  return (
    
    <div>
         <label className="waitlist-content-title">Walk-In Waitlist</label>
         <label className="reservation-content-title">Reservations</label>
        {waitlists.map((data) => (
                    <Waitlist key={data.id} data={data}/>
            ))}
    </div>
  )
}

export default WaitlistCreator