import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from "../../ContextApi/ShopContext";

const ShopCart = () => {

    const {isCartOpen,setIsCartOpen} = useContext(CartContext)

    const toggleDropdown = ()=> setIsCartOpen(!isCartOpen)


    return (
        <div className='cart-icon-container' onClick={toggleDropdown}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
         </div>
    );
};

export default ShopCart;