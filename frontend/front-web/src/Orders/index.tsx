import React, { useEffect, useState } from "react";
import  "./styles.css";
import{ ReactComponent as Logo  } from './logo.svg';
import StepHeaders from "../StepHeaders";
import ProductList from "../ProductList";
import { Product, OrderLocationdata } from "./types";
import { fetchProducts } from '../api';
import OrderLocation from "./OrderLocation";

function Orders () {
    const [products,setProducts] = useState<Product[]>([]); 
    const[orderLocation,setOrderLocation] = useState<OrderLocationdata>()
    
    useEffect(()=>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error=> console.log(error))

    },[]);

    return (
        <div className="orders-container">
            <StepHeaders />
            <ProductList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Orders;