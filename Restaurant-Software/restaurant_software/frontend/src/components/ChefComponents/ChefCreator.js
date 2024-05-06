//creator
import React, { useState, useEffect } from 'react'
import ChefItem from './ChefItem';
import { getUserInfo } from '../../services/userService';


const ChefCreator = () => {

    let [order, setOrder] = useState([]);
    let [view, setView] = useState('incomplete');
    let [restaurantID, setRestaurantID] = useState(null);

    useEffect(() => {
        getOrder()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            getOrder();
        }, 10000); // 10000 milliseconds = 10 seconds
        
        return () => clearInterval(interval);
    }, [restaurantID]);

    useEffect( async () => {
        const token_data = await getUserInfo();
        setRestaurantID(token_data.restaurant);
    }, [])

    useEffect(  () => {
      getOrder();
    }, [restaurantID])
    
    const getOrder = async () => {

        let response = await fetch(`/api/restaurants/${restaurantID}/orders/`);
        let data = await response.json();

        setOrder(data);

    }



    const toggleOrderComplete = async (orderId) => {
        setOrder(order.map(order => 
          order.id === orderId ? { ...order, complete: !order.complete } : order
        ));
        let response = await fetch(`/api/orders/${orderId}/`);
        let data = await response.json();

        fetch(`/api/orders/${orderId}/`, {
        method: 'PUT',
        headers: {  
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({complete: !data.complete, restaurant: data.restaurant, employee: data.employee, items: data.items, table_number: data.table_number})
        });
     };

    const removeOrder = (orderId) => {
        setOrder(prevOrders => prevOrders.filter(order => order.id !== orderId));
        fetch(`/api/orders/${orderId}/`, {method: 'DELETE'})
    }

    const setViewDirectly = (newView) => {
        setView(newView);
    };


    return restaurantID ? (
        <div className="chef-page">
            <button className={view == 'incomplete' ? 'selected-order-tab' : 'unselected-order-tab'} onClick={() => setViewDirectly('incomplete')}>Show Incomplete Orders</button>
            <button  className={view == 'completed' ? 'selected-order-tab' : 'unselected-order-tab'} onClick={() => setViewDirectly('completed')}>Show Completed Orders</button>
            {order.map((order) => (
                view === 'incomplete' && !order.complete ? (
                    <ChefItem 
                        key={order.id}
                        items={order.items} 
                        table_number={order.table_number} 
                        complete={order.complete} 
                        onRemove={() => removeOrder(order.id)} 
                        onToggleComplete={() => toggleOrderComplete(order.id)} 
                    />
                ) : view === 'completed' && order.complete ? (
                    <ChefItem 
                        key={order.id}
                        items={order.items} 
                        table_number={order.table_number} 
                        complete={order.complete} 
                        onRemove={() => removeOrder(order.id)} 
                        onToggleComplete={() => toggleOrderComplete(order.id)} 
                    />
                ) : null
            ))}
        </div>
    ) : (
        <div>Loading...</div>
    )
}


export default ChefCreator