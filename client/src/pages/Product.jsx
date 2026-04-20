import { useState } from "react";
import { useParams } from "react-router"

export default function Product() {

    const { productId } = useParams();
    const [productData, setProductData] = useState

    return (
        <h2>Product</h2>
    )
}