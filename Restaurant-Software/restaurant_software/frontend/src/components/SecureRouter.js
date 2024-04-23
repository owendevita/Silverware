import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserInfo } from '../services/userService';

const SecureRouter = ({ path, element: Element, requiredPermissions }) => {
    const checkPermission = async () => {
      try {
        const tokenData = await getUserInfo();
        const hasRequiredPermission = requiredPermissions.some(permission =>
          tokenData.permissions[permission]
        );
        console.log(tokenData.permissions);
        console.log("HAS PERMISSION: ", hasRequiredPermission);
        return hasRequiredPermission
      } catch (error) {
        console.error('Error fetching user info:', error);
        return false;
      }

    }
    
    if (checkPermission() == true) {
        return <Route path={path} element={<Element />} />;
  } else {
        return<div>Insufficient permissions.</div>
  }
};

export default SecureRouter;
