import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Logout = () => {

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const authContext = useContext(AuthContext);
    
      if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
      }
    
      const { logout } = authContext;

    const handleLogout = () => {
        logout().then(() => {
            navigate(from, { replace: true });
        })
    }


  return (
    <div className="h-screen text-teal-100 flex items-center justify-center">
        <button className="bg-red-700 text-white font-semibold px-8 py-2 rounded hover:bg-red-800 transition-all ease-in duration-300" 
        onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout