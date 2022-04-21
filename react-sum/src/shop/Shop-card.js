import React from 'react';
import "./shop.css";
import Button from '../helpers/Button';

const ShopCard = ({product}) => {

    const {name,price ,imageUrl,id} = product

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="inverted" onClick={()=>alert("s")}>
                Add to card
            </Button>
         </div>
    );
};

export default ShopCard;