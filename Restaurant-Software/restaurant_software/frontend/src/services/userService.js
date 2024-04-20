export const getUserInfo = async () => {
   const response = await fetch('/api/token/info/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({token_key: localStorage.getItem('token')})
    });

    const data = await response.json();
    if (response.ok) {
        if (data.employee && data.permissions && data.restaurant) {
            return data;
        } else {
        console.error('Token information not found:', data);
        }
    } else {
        console.error('Error in fetch operation:', data);
    }
}