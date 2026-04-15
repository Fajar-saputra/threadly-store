import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router";

export default function ProductItem({ id, name, image, price }) {
    const { currency } = useContext(ShopContext);

    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
            <div className="overflow-hidden">
                <img src={image[0]} alt="" className="transition ease-in-out duration-300 hover:scale-110" />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">
                {currency}
                {price}
            </p>
        </Link>
    );
}
