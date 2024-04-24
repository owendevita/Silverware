import React, {useState, useEffect} from 'react'
import Employee from './Employee';

const EmployeeCreator = ({restaurantID}) => {
  
    const [list, setList] = useState([]);

    const getEmployees = async () => {
        let response = await fetch(`/api/restaurants/${restaurantID}/employees/`, {method: 'GET'});
        let data = await response.json();

        setList(data);
    }

    const checkEmployees = async () => {
        let response = await fetch(`/api/restaurants/${restaurantID}/employees/`, {method: 'GET'});
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
        getEmployees();

    }, [restaurantID])
    

    useEffect(() => {
      checkEmployees();
    }, [list, setList])
    

    return (
        <div>
            {list.map((data) => (
                <Employee key={data.id} first_name={data.first_name} last_name={data.last_name} employee_id={data.employee_id} permissions={data.permissions} pk={data.id} setList={setList} restaurantID={restaurantID}/>
        ))}
        </div>
  )
}

export default EmployeeCreator