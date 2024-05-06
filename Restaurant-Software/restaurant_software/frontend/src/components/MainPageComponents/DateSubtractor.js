import React, {useState, useEffect} from 'react'

const DateSubtractor = ({date}) => {
    const [timeDifference, setTimeDifference] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
       let dateDifference = new Date() - new Date(date);
       const minuteDifference = Math.round(((dateDifference % 86400000) % 3600000) / 60000)
       setTimeDifference(minuteDifference);
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div>{timeDifference}</div>
  )
}

export default DateSubtractor