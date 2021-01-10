import React from "react";
import ProductCard from "./Orders/ProductCard";
import { Product } from "./Orders/types";
import { checkIsSelected } from "./Orders/helpers";

type Props ={
    products : Product[];
    selectedProducts : Product[];
    onSelectProduct: (product : Product) => void; 
}

function ProductList ({products,onSelectProduct,selectedProducts }:Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
               {products.map(product =>(
                   <ProductCard 
                    key={product.id} product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts,product)}
                   />
               ))}
                
            </div>
        </div>
    )
}

export default ProductList;