import React from 'react'

const LogoutButton = () => {
    
    const onClick = () => {
        localStorage.removeItem('token');
        window.location = '/login';
    }
    

    return (
        <button className="logout-button" onClick={onClick}>Logout</button>
    )
}

export default LogoutButton