import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from "../../ContextApi/ShopContext";

// import { CartContext } from '../../contexts/cart.context';


// import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

 

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
       

            <div className=''>
                cart item
            </div>
      
          <span className='empty-message'>Your cart is empty</span>
    
      </div>
        {/* <Button>ss</Button> */}
    </div>
  );
};

export default CartDropdown;
