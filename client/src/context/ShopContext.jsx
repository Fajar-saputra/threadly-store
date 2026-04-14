import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

export default function ShopContextProvider(props) {
    const currency = "$";
    const delivery_fee = 10;

    const value = {
        currency,
        delivery_fee,
        products,
    };
    

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
}
