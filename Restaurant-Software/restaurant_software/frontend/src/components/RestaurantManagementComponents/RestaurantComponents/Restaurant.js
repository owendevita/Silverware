import React, {useState, useEffect} from 'react'
import DeleteButton from './DeleteButton';
import CreateButton from './CreateButton';

const Restaurant = ({name, setList, pk}) => {
    
    const [employee_count, setEmployeeCount] = useState(0);

    const getRestaurantStats = async () => {
      let response = await fetch(`/api/restaurants/${pk}/employees`, {method: 'GET'});
      let data = await response.json();
      setEmployeeCount(data.length);

    }

    useEffect(() => {
      getRestaurantStats();
    }, [])
    

    return (
    <div className="inner-box">
        <label className="box-title-label">Name: </label> <label className="box-content-label">{name}</label>
        <label className="box-title-label"># of Employees: </label> <label className="box-content-label">{employee_count}</label>
        <CreateButton pk={pk}/> <DeleteButton pk={pk} setList={setList}/> 
    </div>
  )
}

export default Restaurant