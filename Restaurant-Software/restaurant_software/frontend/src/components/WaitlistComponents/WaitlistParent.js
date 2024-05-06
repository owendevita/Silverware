import React, { useState, useEffect } from 'react'

import WaitlistCreator from './WaitlistCreator';


import { getUserInfo } from '../../services/userService';

const WaitlistParent = () => {
  

    let [restaurantID, setRestaurantID] = useState(null);
   

  const updateUserInfo = async () => {
    const token_data = await getUserInfo();
    setRestaurantID(token_data.restaurant);
    
}

    useEffect(() => {
      updateUserInfo();

      }, []); 

    return restaurantID ? (
    <div>
        <WaitlistCreator restaurantID={restaurantID}/>
    </div>
  ) : (
    <div>
    Loading...
    </div>
  )
}
export default WaitlistParent

