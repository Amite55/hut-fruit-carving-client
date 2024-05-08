import { IoMdLogIn } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navList = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArt">All Art & Craft</NavLink></li>
        {/* private route */}
        <li><NavLink to="/addCraft">Add Craft</NavLink></li>
        <li><NavLink to="/allArt">My Art & Craft</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Hut Fruit Carving</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/signIn" className="btn"><IoMdLogIn />LogIn</Link>
            </div>
        </div>
    );
};

export default Navbar;