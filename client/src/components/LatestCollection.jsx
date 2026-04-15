import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProduct] = useState([]);

    useEffect(() => {
        // Hanya update jika products memang ada isinya
        if (products && products.length > 0) {
            setLatestProduct(products.slice(0, 10));
        }
    }, [products]);

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title title1={"LATEST"} title2={"COLLECTIONS"} />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* Rendering products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    latestProducts.map((item) => (
                        <ProductItem 
                            key={item._id} 
                            id={item._id} 
                            name={item.name} 
                            image={item.image} 
                            price={item.price} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default LatestCollection;
