import { useState } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "../Components/ApplicationLogo";

export default function Guest({ children }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const menuItems = [
        { id: 1, name: "Google", href: "#" },
        { id: 2, name: "Facebook Ads", href: "#" },
        { id: 3, name: "SEO", href: "#" },
        { id: 4, name: "Training", href: "#" },
    ];

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const mobileMenu = () => setIsMobileMenu(!isMobileMenu);
    const hideMenu = () => setIsMobileMenu(false);

    return (
        <>
            <header className="sticky top-0 flex justify-between items-center bg-white shadow-md py-4 px-6">
                <ApplicationLogo />

                {/* Hamburger Menu for Mobile */}
                <button className="md:hidden" onClick={mobileMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`${isMobileMenu ? 'block' : 'hidden'} fixed top-0 left-0 p-8 w-full h-full bg-white z-10`}>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-semibold">Menu</p>
                        <button onClick={hideMenu} className="p-2 bg-gray-500 text-white rounded">X</button>
                    </div>
                    <nav>
                        <ul className="space-y-4">
                            <li><Link href="#">Homepage</Link></li>
                            <li><Link href="#">News</Link></li>
                            <li>
                                <button className="flex justify-between items-center w-full text-left" onClick={toggleDropdown}>
                                    Produk
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <ul className="pl-4 mt-2 space-y-2 bg-gray-100 rounded-md">
                                        {menuItems.map(item => (
                                            <li key={item.id}>
                                                <Link href={item.href} className="text-sm hover:bg-gray-200 block px-4 py-2">{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li><Link href="#">Pemesanan</Link></li>
                            <li><Link href="#">Kontak</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6">
                    <ul className="flex flex-row gap-6">
                        <li><Link href="#" className="hover:text-blue-500">Homepage</Link></li>
                        <li><Link href="#" className="hover:text-blue-500">News</Link></li>
                        <li className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                            <button className="flex items-center text-gray-700 hover:text-blue-500">
                                Produk
                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow mt-2 w-44">
                                    <ul className="py-1">
                                        {menuItems.map(item => (
                                            <li key={item.id}>
                                                <Link href={item.href} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">{item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li><Link href="#" className="hover:text-blue-500">Pemesanan</Link></li>
                        <li><Link href="#" className="hover:text-blue-500">Kontak</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
