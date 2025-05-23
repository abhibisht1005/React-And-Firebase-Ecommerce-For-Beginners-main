import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-4 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
            <Link to="/cart" style={{ display: 'flex', alignItems: 'center' }}>
                <img src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"} alt="Cart" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                <span>({cartItems.length})</span>
            </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-400 sticky top-0 z-50 shadow-md">
    {/* Main Container */}
    <div className="lg:flex lg:justify-between items-center py-3 lg:px-6">

        {/* Left Section (Logo) */}
        <div className="left py-3 lg:py-0">
            <Link to={'/'}>
                <h2 className="font-bold text-white text-3xl text-center sm:text-4xl hover:text-indigo-200 transition duration-300 ease-in-out">
                    Quick-shop
                </h2>
            </Link>
        </div>

        {/* Right Section (Navigation Links) */}
        <div className="right flex items-center space-x-6 mb-4 lg:mb-0">
            {navList}
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center">
            <SearchBar />
           
        </div>
    </div>
</nav>
    );
}

export default Navbar;
