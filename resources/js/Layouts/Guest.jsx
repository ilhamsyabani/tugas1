import { useState } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "../Components/ApplicationLogo";

export default function Guest({ children }) {
    // State untuk dropdown, menu, dan mobile menu
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    // Data submenu 
    const menuItems = [
        { id: 1, name: "Google", href: "#" },
        { id: 2, name: "Facebook Ads", href: "#" },
        { id: 3, name: "SEO", href: "#" },
        { id: 4, name: "Training", href: "#" },
    ];

    // Fungsi untuk menampilkan dropdown
    const handleMouseEnter = () => setIsDropdownOpen(true);
    const handleMouseLeave = () => setIsDropdownOpen(false);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Tampilan menu untuk mobile
    const mobileMenu = () => setIsMobileMenu(!isMobileMenu);
    const hideMenu = () => setIsMobileMenu(false); // Perbaikan di sini

    return (
        <>
            <header className="sticky top-0 flex justify-between items-center bg-slate-50 shadow-sm py-4 px-24 w-full xl">
                <ApplicationLogo />
                
                {/* Hamburger Menu untuk Mobile */}
                <button
                    className="md:hidden block focus:outline-none"
                    onClick={mobileMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`${isMobileMenu ? 'block' : 'hidden'} fixed top-0 left-0 p-8 w-full z-10 bg-white`}>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-semibold">Menu</p> 
                        <button onClick={hideMenu} className="p-2 bg-slate-500 text-white rounded">
                            X
                        </button>
                    </div>
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <Link>Homepage</Link>
                            </li>
                            <li>
                                <Link>News</Link>
                            </li>
                            <li>
                                <button
                                    className="flex justify-between items-center w-full text-left"
                                    onClick={toggleDropdown}
                                >
                                    Produk
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="pl-4 mt-2 space-y-2">
                                        {menuItems.map(item => (
                                            <li key={item.id}>
                                                <a href={item.href} className="text-sm hover:bg-gray-100 block px-4 py-2">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <Link>Pemesanan</Link>
                            </li>
                            <li>
                                <Link>Kontak</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Menu untuk Desktop */}
                <nav className="hidden md:flex gap-6">
                    <ul className="flex flex-row gap-6">
                        <li>
                            <Link>Homepage</Link>
                        </li>
                        <li>
                            <Link>News</Link>
                        </li>
                        <li 
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button 
                                className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 font-medium flex items-center"
                            >
                                Produk
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {/* Dropdown menu */}
                            {isDropdownOpen && (
                                <div className="absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                                    <ul className="py-1">
                                        {menuItems.map(item => (
                                            <li key={item.id}>
                                                <a href={item.href} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link>Pemesanan</Link>
                        </li>
                        <li>
                            <Link>Kontak</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="">
                {children}
            </main>
        </>
    );
}
