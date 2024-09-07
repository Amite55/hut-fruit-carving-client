
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../customHooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} =  useAuth();
    const location = useLocation();
    console.log(user);
    if(loading){
      return <span className="loading loading-spinner loading-lg mx-auto items-center my-10"></span>
    }

    if(!user){
        return <Navigate to="/signIn" state={location?.pathname || '/'} replace />
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