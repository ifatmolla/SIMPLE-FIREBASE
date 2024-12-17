import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="space-x-3">
         <NavLink to="/">Home</NavLink>
         <NavLink style={{'marginRight': '20px'}} to="/login">Login</NavLink>
        </div>
    );
};

export default Header;