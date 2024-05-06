import React from 'react'
import RestaurantCreator from './RestaurantComponents/RestaurantCreator';
import CreateButton from './CreateButton';

const RestaurantManagementParent = () => {
  
    return ( 
        <div>
          <h1 className="page-title">Manage Restaurants</h1>
          <CreateButton />
          <RestaurantCreator />
        </div>
      )
}

export default RestaurantManagementParent