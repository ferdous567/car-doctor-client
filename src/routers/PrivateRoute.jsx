import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    if(loading){
        return <div className="text-center mt-20">
        <span className="loading loading-spinner loading-md text-2xl"></span>
        <h2 className="text-2xl font-bold">Loading...</h2>
        </div>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to = '/login' replace></Navigate>;
};

export default PrivateRoute;