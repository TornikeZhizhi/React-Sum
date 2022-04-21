import React from "react";
import {useParams}  from "react-router-dom";

import SHOP_DATA from "../shop-data.json"
import ShopCard from "./Shop-card";

console.log(SHOP_DATA)

const Shop = () => {
    

    return (
        <div className="products-container">
             
          { SHOP_DATA.map(product=>(

            <ShopCard product={product} key={product.id} />     

            ))}
        </div>

    )
}


export default Shop;