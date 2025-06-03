import { useState } from "react";
import { Link } from "react-router";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className=" bg-black">
            <nav className="w-9/12 mx-auto text-white px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Logo" className="w-30" />
                    </Link>

                    {/* Desktop Search */}
                    <div className="hidden md:flex items-center bg-white rounded-md px-3 py-3 text-sm text-black w-1/3">
                        <FiSearch className="h-4 w-4 mr-2" />
                        <input
                            type="text"
                            placeholder="Search your Destination..."
                            className="w-full bg-transparent text-black placeholder-gray-700 focus:outline-none"
                        />
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 text-sm">
                        <Link to="/news" className="hover:text-orange-400">News</Link>
                        <Link to="/destination" className="hover:text-orange-400">Destination</Link>
                        <Link to="/blog" className="hover:text-orange-400">Blog</Link>
                        <Link to="/contact" className="hover:text-orange-400">Contact</Link>
                        <Link
                            to="/login"
                            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden mt-4 space-y-3">
                        <div className="flex items-center bg-white rounded-md px-3 py-2 text-sm text-black">
                            <FiSearch className="h-4 w-4 mr-2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search your Destination..."
                                className="w-full focus:outline-none"
                            />
                        </div>
                        <Link to="/news" className="block hover:text-orange-400">News</Link>
                        <Link to="/destination" className="block hover:text-orange-400">Destination</Link>
                        <Link to="/blog" className="block hover:text-orange-400">Blog</Link>
                        <Link to="/contact" className="block hover:text-orange-400">Contact</Link>
                        <Link
                            to="/login"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded"
                        >
                            Login
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
}
