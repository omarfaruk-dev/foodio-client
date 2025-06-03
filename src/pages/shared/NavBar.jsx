import React, { useState } from 'react';
import logo from '/logo.png';
import { FaMoon, FaBars, FaTimes, FaUser, FaSignOutAlt, FaCode, FaHome, FaUtensils, FaImages } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import ThemeToggle from '../../components/ThemeToggle';

const NavBar = () => {
    const {user} = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);


    const links =
        <>
            <NavLink className="flex items-center gap-2 text-primary font-medium hover:text-secondary"><FaHome /> Home</NavLink>
            <NavLink to='/all-foods' className="flex items-center gap-2 text-primary font-medium hover:text-secondary"><FaUtensils /> All Foods</NavLink>
            <NavLink className="flex items-center gap-2 text-primary font-medium hover:text-secondary"><FaImages /> Gallery</NavLink>
        </>

    return (
        <nav className="bg-secondary/8 border-b border-secondary/20 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="Foodio Logo" className="w-30 mr-2" />
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {links}
                    </div>
                    {/* Actions */}
                    <div className="flex items-center space-x-3 relative">
                        <button className="">
                            <ThemeToggle />
                        </button>
                        {user ? (
                            <div className="relative">
                                <button
                                    className="ml-2 bg-base-100 border-2 border-secondary/20 text-primary p-2 rounded-full hover:bg-base-100 focus:outline-none flex items-center justify-center"
                                    onClick={() => setUserMenuOpen((prev) => !prev)}
                                >
                                    <FaCode size={22} />
                                </button>
                                {userMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-base-100 border border-secondary/20 rounded-lg shadow-lg z-50">
                                        <div className="px-4 py-2 font-medium text-primary border-b border-secondary/20">{user.name}</div>
                                        <button className="flex items-center w-full px-4 py-2 text-primary hover:bg-base-100">
                                            <FaUser className="mr-2" /> Profile
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 text-primary hover:bg-base-100">
                                            <FaSignOutAlt className="mr-2" /> Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to='/login' className="hidden md:inline-flex items-center justify-center btn btn-secondary text-base-100 rounded-3xl transition h-10 px-6">Log In</Link>
                        )}
                        {/* Hamburger */}
                        {!menuOpen && (
                            <button className="md:hidden ml-2 p-2 rounded focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                                <FaBars size={22} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${menuOpen ? 'translate-x-0 opacity-100 visible' : '-translate-x-full opacity-0 invisible'}`}
                style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-transparent transition-opacity duration-300 ${menuOpen ? 'bg-opacity-30' : 'bg-opacity-0'}`}
                    onClick={() => setMenuOpen(false)}
                />
                {/* Sidebar */}
                <div
                    className={`relative bg-base-100 border-r border-secondary/20 w-64 h-full px-4 pb-4 pt-6 shadow-lg transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src={logo} alt="Foodio Logo" className=" w-30 mr-2" />

                        </div>
                        <button className="p-2 rounded focus:outline-none" onClick={() => setMenuOpen(false)}>
                            <FaTimes size={22} />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-1">
                        {React.Children.map(links.props.children, (link, idx) => (
                            <li key={idx}>{link}</li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 mt-4 border-t border-secondary/20 pt-2">
                        {user ? (
                            <>
                                <div className="px-2 py-1 font-semibold text-primary border-b border-secondary/20 flex items-center gap-2">
                                    {user.name}
                                </div>
                                <button className="flex items-center px-4 py-2 text-primary hover:bg-base-100">
                                    <FaUser className="mr-2" /> Profile
                                </button>
                                <button className="flex items-center px-4 py-2 text-primary hover:bg-base-100">
                                    <FaSignOutAlt className="mr-2" /> Logout
                                </button>
                            </>
                        ) : (
                            <Link to='/login' className="flex items-center justify-center border border-secondary/20 text-primary px-4 py-1 rounded-lg font-medium hover:bg-base-100 transition h-10">Log In</Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;