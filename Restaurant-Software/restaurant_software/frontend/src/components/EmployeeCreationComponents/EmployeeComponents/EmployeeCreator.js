import React, {useState, useEffect} from 'react'
import Employee from './Employee';

const EmployeeCreator = ({restaurantID}) => {
  
    const [list, setList] = useState([]);

    const getEmployees = async () => {
        let response = await fetch(`/api/restaurants/${restaurantID}/employees/`, {method: 'GET'});
        let data = await response.json();
        setList(data);
    }

    useEffect(() => {
        getEmployees();

    }, [restaurantID])
    

    return (
        <div>
            {list.map((data) => (
                <Employee first_name={data.first_name} last_name={data.last_name} employee_id={data.employee_id} permissions={data.permissions} pk={data.id}/>
        ))}
        </div>
  )
}

export default EmployeeCreator