import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
    const { loading } = useContext(AuthContext)
    const { user } = useContext(AuthContext)

    if (loading) {
        return <><span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span></>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to={'/login'} ></Navigate>
    );
};

export default PrivetRoutes;