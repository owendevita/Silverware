import React, { useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getUserInfo } from '../services/userService';

const SecureRouter = ({ path, component, requiredPermissions, children }) => {
  const [hasPermission, setHasPermission] = useState(null);

  const checkPermission = async () => {
    try {
      const tokenData = await getUserInfo();
      const hasRequiredPermission = requiredPermissions.some(permission =>
        tokenData.permissions[permission]
      );
      setHasPermission(hasRequiredPermission);
    } catch (error) {
      console.error('Error fetching user info:', error);
      setHasPermission(false);
    }
  };

  checkPermission(); // Invoke checkPermission directly when the component is rendered

  if (hasPermission === null) {
    // Still loading permissions, render nothing or a loading indicator
    return null;
  }

  if (hasPermission) {
    return children
  } else {
    // Handle case where user does not have permission
    return <Navigate to="/" replace />;
  }
};

export default SecureRouter;
