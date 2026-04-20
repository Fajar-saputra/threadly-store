import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation, useSearchParams } from "react-router";

const SearchBar = () => {
    const { search, setSearch, setShowSearch, showSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false)

    const location = useLocation();

    useEffect(() => {
        setVisible(location.pathname.includes('/collection'))
    }, [location])

    const closeSearch = () => {
        setSearch('')
        setShowSearch(false)
    }


    return showSearch && visible ? (
        <div className="border-t border-b bg-gray-50  text-center">
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-2/4">
                <input onChange={(e) => setSearch(e.target.value)} value={search} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="Search for products..." />

                <img className="w-4" src={assets.search_icon} alt="search icon" />
            </div>
            <img onClick={closeSearch} className="inline w-3 cursor-pointer" src={assets.cross_icon} alt="cross icon" />
        </div>
    ) : null;
};

export default SearchBar;
