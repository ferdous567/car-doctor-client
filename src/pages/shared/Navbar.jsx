import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import { BiCart, BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () =>{
        logOut()
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        {
            user?.email ?  <>
            <li><Link to='/bookings'>My Bookings</Link></li>
            <li><Link  onClick={handleLogout}>Log Out</Link></li>
            </> :
            <li><NavLink to='/login'>Login</NavLink></li>
        }

        
    </>

    return (
        <div className="navbar bg-base-100 h-[120px] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <BiCart className=" text-2xl mr-2"></BiCart>
                <BiSearch className=" text-2xl mr-4"></BiSearch>
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;