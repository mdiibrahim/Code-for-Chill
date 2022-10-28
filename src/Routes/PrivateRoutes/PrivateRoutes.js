import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { user, toaster } = useContext(AuthContext);
    const location = useLocation();
    if (toaster) {
        return <div>please wait a while.....!!</div>
    }
    if (!user) {
        return (
            <Navigate to='/login' replace state={{from:location}}></Navigate>
        );
    }
    return children;
    
};

export default PrivateRoutes;