import React, { useState } from 'react';
import logo from '/logo.png';
import { FaMoon, FaBars, FaTimes, FaUser, FaSignOutAlt, FaCode } from 'react-icons/fa';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    // Mock user (replace with real auth logic)
    const user = { name: 'Omar Faruk' };

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
                        <a href="#" className="text-base font-medium text-primary">Home</a>
                        <a href="#" className="text-base font-medium text-primary">Add To Find Roommate</a>
                        <a href="#" className="text-base font-medium text-primary">Browse Listing</a>
                        <a href="#" className="text-base font-medium text-primary">My Listing</a>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center space-x-3 relative">
                        <button className="bg-[#5F6368] text-white p-2 rounded-full hover:bg-[#E83935] focus:outline-none">
                            <FaMoon size={18} />
                        </button>
                        {user ? (
                            <div className="relative">
                                <button
                                    className="ml-2 bg-white border-2 border-[#E83935] text-[#5F6368] p-2 rounded-full hover:bg-[#F7F7F7] focus:outline-none flex items-center justify-center"
                                    onClick={() => setUserMenuOpen((prev) => !prev)}
                                >
                                    <FaCode size={22} />
                                </button>
                                {userMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E83935] rounded-lg shadow-lg z-50">
                                        <div className="px-4 py-2 font-medium text-[#5F6368] border-b border-[#E83935]">{user.name}</div>
                                        <button className="flex items-center w-full px-4 py-2 text-[#5F6368] hover:bg-[#F7F7F7]">
                                            <FaUser className="mr-2" /> Profile
                                        </button>
                                        <button className="flex items-center w-full px-4 py-2 text-[#5F6368] hover:bg-[#F7F7F7]">
                                            <FaSignOutAlt className="mr-2" /> Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <button className="hidden md:inline-block border border-[#E83935] text-[#5F6368] px-4 py-1 rounded-lg font-medium hover:bg-[#F7F7F7] transition">Sign In</button>
                                <button className="hidden md:inline-block bg-[#E83935] text-white px-4 py-1 rounded-lg font-medium shadow hover:bg-[#5F6368] transition">Sign Up</button>
                            </>
                        )}
                        {/* Hamburger */}
                        <button className="md:hidden ml-2 p-2 rounded focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${menuOpen ? 'bg-opacity-30' : 'bg-opacity-0'}`}
                    onClick={() => setMenuOpen(false)}
                />
                {/* Sidebar */}
                <div
                    className={`relative bg-[#F7F7F7] border-r border-[#E5E7EB] w-64 h-full px-4 pb-4 pt-6 shadow-lg transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img src={logo} alt="Foodio Logo" className="h-8 w-8 mr-2" />
                            <span className="font-bold text-xl text-[#5F6368] tracking-wide">FOODIO</span>
                        </div>
                        <button className="p-2 rounded focus:outline-none" onClick={() => setMenuOpen(false)}>
                            <FaTimes size={22} />
                        </button>
                    </div>
                    <a href="#" className="block py-2 text-base font-medium text-primary">Home</a>
                    <a href="#" className="block py-2 text-base font-medium text-primary">Add To Find Roommate</a>
                    <a href="#" className="block py-2 text-base font-medium text-primary">Browse Listing</a>
                    <a href="#" className="block py-2 text-base font-medium text-primary">My Listing</a>
                    <div className="flex flex-col gap-2 mt-4 border-t border-[#E83935] pt-2">
                        {user ? (
                            <>
                                <div className="px-2 py-1 font-semibold text-[#5F6368] border-b border-[#E83935] flex items-center gap-2">
                                    {user.name}
                                </div>
                                <button className="flex items-center px-4 py-2 text-[#5F6368] hover:bg-[#F7F7F7]">
                                    <FaUser className="mr-2" /> Profile
                                </button>
                                <button className="flex items-center px-4 py-2 text-[#5F6368] hover:bg-[#F7F7F7]">
                                    <FaSignOutAlt className="mr-2" /> Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="border border-[#E83935] text-[#5F6368] px-4 py-1 rounded-lg font-medium hover:bg-[#F7F7F7] transition">Sign In</button>
                                <button className="bg-[#E83935] text-white px-4 py-1 rounded-lg font-medium shadow hover:bg-[#5F6368] transition">Sign Up</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;