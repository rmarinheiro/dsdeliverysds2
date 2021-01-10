import React from "react";
import ProductCard from "./Orders/ProductCard";
import { Product } from "./Orders/types";

type Props ={
    products : Product[];
}

function ProductList ({products }:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
               {products.map(product =>(
                   <ProductCard key={product.id} product={product}/>
               ))}
                
            </div>
        </div>
    )
}

export default ProductList;