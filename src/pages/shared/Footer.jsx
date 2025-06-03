import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";
import logo from '/logo.png';


const Footer = () => {
    return (
        <footer className="bg-secondary/5 text-accent pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 text-sm items-start lg:justify-items-center">
                {/* Brand & Mission */}
                <div>
                    <div className="flex lg:items-center gap-2 mb-3">
                        <img src={logo} alt="Roomly Logo" className="w-30" />

                    </div>
                    <p className="text-accent text-sm leading-relaxed mb-2">Foodio helps you discover great meals and manage your restaurant experience with ease and security.</p>
                </div>
                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Contact</h3>
                    <p className="mb-1">support@foodio.com</p>
                    <p className="mb-1">+1 (800) 123-4567</p>
                    <p>123 Room St, WA, USA</p>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-secondary">Home</Link></li>
                        <li><Link to="/all-foods" className="hover:text-secondary">All Foods</Link></li>
                        <li><Link to="/gallery" className="hover:text-secondary">Gallery</Link></li>
                    </ul>
                </div>
                {/* Social Media Section */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Connect</h3>
                    <div className="flex gap-4 text-lg mb-1">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            {/* Bottom: Terms/Privacy row, then copyright row */}
            <div className="pt-8 mt-8 text-center text-xs text-accent border-t border-secondary/10 flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/terms-and-conditions" className="hover:text-secondary underline">Terms & Conditions</Link>
                    <span className="text-secondary/30">|</span>
                    <Link to="/privacy-policy" className="hover:text-secondary underline">Privacy Policy</Link>
                </div>
                <div>
                    © {new Date().getFullYear()} Foodio. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
