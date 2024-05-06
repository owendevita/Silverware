import React, {useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Navbar.css';
import { IconContext } from 'react-icons';
import { getUserInfo } from '../services/userService';

function Navbar() {
  
  const [permissions, setPermissions] = useState(null);

  let getPermissions = async () => {
    const token_data = await getUserInfo();

    setPermissions(token_data.permissions)
  }

  let checkPermissions = (requiredPermissions) => {
    const hasRequiredPermission = requiredPermissions.some(permission =>
      permissions[permission]
    );

    console.log(hasRequiredPermission);
    return hasRequiredPermission;
  }

  useEffect(() => {
    getPermissions();
  }, [])
  
  
  return permissions && permissions != null ? (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => (
            (checkPermissions(item.requiredPermissions)) &&
            <li key={index} className={item.cName}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
          ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  ) :
  <div>Loading...</div>;
}

export default Navbar;
