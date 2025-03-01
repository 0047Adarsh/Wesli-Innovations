import React from "react";
import Card from "./Card";
import productsData from "../products.json";

function ProductList()
{
    return (
        productsData.map((product)=>
        {
            return <Card key={product.id} product={product}/>
        })
    )
}

export default ProductList;