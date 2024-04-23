import React, {useState, useEffect} from 'react'
import { getUserInfo } from '../../services/userService';
import EmployeeCreator from './EmployeeComponents/EmployeeCreator';

const EmployeeCreationParent = () => {
    
    const [restaurantID, setRestaurantID] = useState(null);
    useEffect(() => {
        userInfo();
    }, [])
    


    const userInfo = async () =>{
        const token_data = await getUserInfo();
        setRestaurantID(token_data.restaurant);
    }

    return restaurantID ? (
        <div>
          <EmployeeCreator restaurantID={restaurantID} />
        </div>
      ) : (
        <div>Loading...</div>
      );
}

export default EmployeeCreationParent