import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

export default function ShopContextProvider(props) {
    const currency = "$";
    const delivery_fee = 10;

    // search bar
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)

    const value = {
        currency,
        delivery_fee,
        products,
        search, setSearch, showSearch, setShowSearch
    };
    

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
}
