import { useContext, useEffect, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";


export default function Collection() {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [typeSort, setSortType] = useState('relevant');

    const toggleFeature = (setter) => (e) => {
        const value = e.target.value;
        setter(prev => prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]);
    };
    
    // Data filterProducts hanya dihitung ULANG jika salah satu dependency di [] berubah
    const filterProducts = useMemo(() => {
        let tempProducts = [...products];


        // search
        if (showSearch && search) {
            tempProducts = tempProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        // 1. Filter Kategori
        if (category.length > 0) {
            tempProducts = tempProducts.filter(item => category.includes(item.category));
        }

        // 2. Filter SubKategori
        if (subCategory.length > 0) {
            tempProducts = tempProducts.filter(item => subCategory.includes(item.subCategory));
        }

        // 3. Langsung Sortir disini
        switch (typeSort) {
            case 'low-high':
                return tempProducts.sort((a, b) => a.price - b.price);
            case 'high-low':
                return tempProducts.sort((a, b) => b.price - a.price);
            default:
                return tempProducts;
        }
    }, [category, subCategory, typeSort, products, showSearch, search]); 

    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            {/* Sidebar Filter */}
            <div className="min-w-60">
                <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
                    FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="" />
                </p>

                {/* Kategori */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {["Men", "Women", "Kids"].map((item) => (
                            <label key={item} className="flex gap-2 cursor-pointer">
                                <input className="w-3" type="checkbox" value={item} onChange={toggleFeature(setCategory)} /> {item}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sub Kategori */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
                    <p className="mb-3 text-sm font-medium">TYPE</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {["Topwear", "Bottomwear", "Winterwear"].map((item) => (
                            <label key={item} className="flex gap-2 cursor-pointer">
                                <input className="w-3" type="checkbox" value={item} onChange={toggleFeature(setSubCategory)} /> {item}
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Map */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title title1={"All"} title2={"COLLECTIONS"} />
                    <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-200 text-sm px-2">
                        <option value="relevant">Sort by : Relevant</option>
                        <option value="low-high">Sort by : Low To High</option>
                        <option value="high-low">Sort by : High To Low</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filterProducts.map((item) => (
                        <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}