import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(loading);

    if(loading){
      return <span className="loading loading-spinner loading-lg"></span>
    }

    if(!user){
        return <Navigate to="/signIn" state={location?.pathname || '/'} />
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
  };