import React, { useState, useEffect } from 'react'
import { getUserInfo } from '../../services/userService';

const OrderCreator = () => {

    let [tableNumber, setTableNumber] = useState("");
    let [items, setItems] = useState("");
    let [employee, setEmployee] = useState("");
    let [restaurant, setRestaurant] = useState("");

    let [orders, setOrders] = useState([]);


    let [editingOrder, setEditingOrder] = useState(null);
    let [editingOrderState, setEditingOrderState] = useState({});

    let [isEditing, setIsEditing] = useState(true);

    let [restaurantID, setRestaurantID] = useState(null);
    let [employeeID, setEmployeeID] = useState(null);


    const Submit = async (event) => {
        const orderData = {
            table_number: tableNumber,
            items: items,
            complete: false,
            employee: employeeID,
            restaurant: restaurantID
        };
        
        console.log(orderData);

        let response = await fetch('http://127.0.0.1:8000/api/create/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        let data = await response.json();
        console.log('Order created:', data);

        fetchIncompleteOrders();
    };


    const fetchIncompleteOrders = async () => {
        if(restaurantID){
            let response = await fetch(`/api/restaurants/${restaurantID}/orders/`);
            let data = await response.json();

            let incompleteOrders = data.filter(order =>!order.complete);
            setOrders(incompleteOrders);
        }
    };

    useEffect(() => {
        if (isEditing) {
            fetchIncompleteOrders();
            const interval = setInterval(() => {
                fetchIncompleteOrders();
            }, 5000);
        
            return () => clearInterval(interval);
        }
    }, [isEditing, restaurantID]);

    useEffect( async () => {
        const token_data = await getUserInfo();
        setRestaurantID(token_data.restaurant);
        setEmployeeID(token_data.employee);
    }, [])

    useEffect(() => {
        fetchIncompleteOrders();
    }, [restaurantID])
    
    
    const handleEditClick = (order) => {
        console.log(order);
        setEditingOrder(order);
        setEditingOrderState(order);
        setIsEditing(false);
    };

    const deleteOrder = async (order) => {
        fetch(`/api/orders/${order.id}/`, {method: 'DELETE'});
        window.location.reload();
    }

    const handleSaveChanges = async (event) => {
        event.preventDefault(); 

        const updatedOrderData = {
            id: editingOrderState.id,
            table_number: editingOrderState.table_number,
            items: editingOrderState.items,
            complete: editingOrderState.complete,
            employee: employeeID,
            restaurant: restaurantID
        };

        console.log('Order updated:', updatedOrderData);

        let response = await fetch(`http://127.0.0.1:8000/api/orders/${editingOrder.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedOrderData),
        });

        let data = await response.json();
        console.log('Order:', data);

        fetchIncompleteOrders();
        setEditingOrder(null);
        setEditingOrderState({});
        setIsEditing(true);
};



    return restaurantID && employeeID ? (
        <div className="create-order-page">
        <h1 className='order-titles'>Submit New Order</h1>
        <form onSubmit={Submit}>
            <label>
                Table Number:
                <input type="number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} />
            </label>
            <br></br>
            <label>
                Items:
                <br></br>
                <textarea className='items-input' type="text" value={items} onChange={(e) => setItems(e.target.value)} />
            </label>
            <br></br>
            <button className='order-submit-button' type="submit">Submit</button>
        </form>

        <h1 className='order-titles'>Incomplete Orders</h1>
        <div>
        {orders.map((order) => (
          <div key={order.id} className="incomplete-order-box">
            <div className='incomplete-order-content-title'>Table Number:</div> 
            {order.table_number} 
            <div className='incomplete-order-content-title'>Items:</div> {order.items}
            <br></br>
            <button className='order-edit-button' onClick={() => handleEditClick(order)}>Edit</button>
            <button className='order-delete-button' onClick={() => deleteOrder(order)}>Delete</button>
            {editingOrder === order && (
                <form onSubmit={handleSaveChanges}>
                <label>
                <div className='incomplete-order-content-title'>Table Number:</div>
                    <input
                        type="number"
                        value={editingOrderState.table_number}
                        onChange={(e) => setEditingOrderState({ ...editingOrderState, table_number: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    <div className='incomplete-order-content-title'>Items:</div>
                    <textarea
                        className='incomplete-order-item-input'
                        type="text"
                        value={editingOrderState.items}
                        onChange={(e) => setEditingOrderState({ ...editingOrderState, items: e.target.value })}
                    />
                </label>
                <br />
                <button className='order-save-button' type="submit">Save Changes</button>
              </form>
            )}
          </div>
        ))}

        </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
}

export default OrderCreator