import React from 'react'

const LogoutButton = () => {
    
    const onClick = () => {
        localStorage.removeItem('token');
        window.location = '/login';
    }
    

    return (
        <button onClick={onClick}>Logout</button>
    )
}

export default LogoutButton