import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router";

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    const menu = [
        { name: "HOME", path: "/" },
        { name: "COLLECTION", path: "/collection" },
        { name: "ABOUT", path: "/about" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            {/* Logo */}
            <img src={assets.logo} alt="logo brand" className="w-36" />

            {/* Menu */}
            <ul className="hidden sm:flex gap-8 text-sm">
                {menu.map((item) => (
                    <NavLink key={item.path} to={item.path}>
                        {({ isActive }) => (
                            <div className="flex flex-col items-center gap-1 cursor-pointer">
                                <p className={`transition-all duration-200 ${isActive ? "text-black [text-shadow:0_0_0.5px_black]" : "text-gray-500 hover:text-black"}`}>{item.name}</p>
                                <div className={`h-[2px] bg-black transition-all duration-300 ${isActive ? "w-2/3" : "w-0"}`} />
                            </div>
                        )}
                    </NavLink>
                ))}
            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search_icon} alt="search icon" className="w-5 cursor-pointer" />

                <div className="group relative">
                    <img src={assets.profile_icon} alt="profile icon" className="w-5 cursor-pointer" />
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} alt="cart icon" className="w-5 min-w-5" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>

                <img src={assets.menu_icon} alt="menu icon" className="w-5 sm:hidden cursor-pointer" onClick={() => setVisible(true)} />
            </div>

            {/* small menu for small devices */}
            <div className={`absolute top-0 right-0 bottom-0 bg-white transition-all duration-300 ${visible ? "w-full" : "w-0"} overflow-hidden`}>
                <div onClick={() => setVisible(false)} className={`fixed inset-0 bg-black/10 transition-opacity duration-300 z-40 ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`} />

                <div className={`fixed top-0 right-0 h-full w-1/2 max-w-xs bg-white z-50 transform transition-transform duration-300 ${visible ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex flex-col text-gray-700 h-full">
                        <div className="flex items-center gap-4 p-4 cursor-pointer" onClick={() => setVisible(false)}>
                            <img src={assets.dropdown_icon} alt="back icon" className="h-4 rotate-180" />
                            <p className="font-medium">Back</p>
                        </div>

                        <div className="flex flex-col">
                            {menu.map((item) => (
                                <NavLink key={item.path} to={item.path} onClick={() => setVisible(false)} className="py-4 px-6 transition active:bg-gray-100 group">
                                    {({ isActive }) => (
                                        <div className="relative inline-block">
                                            <p
                                                className={`uppercase tracking-wide transition duration-300 ${
                                                    isActive ? "text-orange-500 [text-shadow:0_0_10px_rgba(249,115,22,0.35)]" : "group-hover:text-orange-500"
                                                }`}
                                            >
                                                {item.name}
                                            </p>
                                            <span
                                                className={`absolute bottom-[-4px] left-0 w-full h-[2px] bg-orange-500 origin-left transition-transform duration-300 ease-out ${
                                                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                }`}
                                            />
                                        </div>
                                    )}
                                </NavLink>
                            ))}     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
