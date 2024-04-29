import React, {useState, useEffect} from 'react'
import Restaurant from './Restaurant';

const RestaurantCreator = ({restaurantID}) => {
  
    const [list, setList] = useState([]);

    const getRestaurants = async () => {
        let response = await fetch(`/api/restaurants/`, {method: 'GET'});
        let data = await response.json();

        setList(data);
    }

    const checkRestaurants = async () => {
        let response = await fetch(`/api/restaurants/`, {method: 'GET'});
        let data = await response.json();

        if(list.length == data.length){
            for(let i = 0; i < list.length; i++){
                if(list[i].id != data[i].id){
                    setList(data);
                }
            }

        }
    }

    useEffect(() => {
        getRestaurants();

    }, [restaurantID])
    

    useEffect(() => {
      checkRestaurants();
    }, [list, setList])
    

    return (
        <div className="employee-container">
            {list.map((data) => (
                <div className="employee-box">
                    <Restaurant key={data.id} name={data.name} pk={data.id} setList={setList} employee_count/>
                </div>
        ))}
        </div>
  )
}

export default RestaurantCreator