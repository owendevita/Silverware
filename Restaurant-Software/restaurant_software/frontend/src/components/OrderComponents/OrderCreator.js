//MAKE IT ONLY WORK WITH MENU ITEMS???
import React, { useState, useEffect } from 'react'


const OrderCreator = () => {

    let [tableNumber, setTableNumber] = useState("");
    let [items, setItems] = useState("");
    let [employee, setEmployee] = useState("");
    let [restaurant, setRestaurant] = useState("");

    let [orders, setOrders] = useState([]);


    let [editingOrder, setEditingOrder] = useState(null);
    let [editingOrderState, setEditingOrderState] = useState({});

    let [isEditing, setIsEditing] = useState(true);


    const Submit = async () => {

        const orderData = {
            table_number: tableNumber,
            items: items,
            complete: false,
            employee: employee,
            restaurant: restaurant
        };

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
        let response = await fetch(`/api/restaurants/1/orders/`);
        let data = await response.json();

        let incompleteOrders = data.filter(order =>!order.complete);
        setOrders(incompleteOrders);
    };

    useEffect(() => {
        if (isEditing) {
            fetchIncompleteOrders();
            const interval = setInterval(() => {
                fetchIncompleteOrders();
            }, 5000);
        
            return () => clearInterval(interval);
        }
    }, [isEditing]);



    const handleEditClick = (order) => {
        setEditingOrder(order);
        setEditingOrderState(order);
        setIsEditing(false);
    };

    const handleSaveChanges = async (event) => {
        event.preventDefault(); 

        const updatedOrderData = {
            id: editingOrderState.id,
            table_number: editingOrderState.table_number,
            items: editingOrderState.items,
            complete: editingOrderState.complete,
            employee: editingOrderState.employee,
            restaurant: editingOrderState.restaurant
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



    return (
        <div>
        <form onSubmit={Submit}>
            <label>
                Table Number:
                <input type="number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} />
            </label>
            <br></br>
            <label>
                Items:
                <input type="text" value={items} onChange={(e) => setItems(e.target.value)} />
            </label>
            <br></br>
            <label>
                Employee:
                <input type="number" value={employee} onChange={(e) => setEmployee(e.target.value)} />
            </label>
            <br></br>
            <label>
                Restaurant:
                <input type="number" value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
            </label>
            <br></br>
            <button type="submit">Submit Order</button>
        </form>

        <h2>Incomplete Orders:</h2>
        <div>
        {orders.map((order) => (
          <div key={order.id}>
            Table Number: {order.table_number}, Items: {order.items}
            <button onClick={() => handleEditClick(order)}>Edit</button>
            
            {editingOrder === order && (
                <form onSubmit={handleSaveChanges}>
                <label>
                    Table Number:
                    <input
                        type="number"
                        value={editingOrderState.table_number}
                        onChange={(e) => setEditingOrderState({ ...editingOrderState, table_number: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Items:
                    <input
                        type="text"
                        value={editingOrderState.items}
                        onChange={(e) => setEditingOrderState({ ...editingOrderState, items: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit">Save Changes</button>
              </form>
            )}
          </div>
        ))}

        </div>
        </div>
    );
}

export default OrderCreator