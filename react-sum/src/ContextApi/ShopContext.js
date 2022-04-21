import { createContext ,useState} from "react";

import SHOP_DATA  from "../shop-data.json";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    shopData:SHOP_DATA,
    setShopData:()=>{},
    cartData:[],
    setCartData:()=>{},
    cartTotal:[],
    setCartTotal:()=>{},

  });

 const ShopProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [shopData , setShopData] = useState(SHOP_DATA);
    const [cartData , setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0)



    let existingCartItem ;
    const setOnCartData = (product) => {
        
        if(cartData.length > 0){
            existingCartItem = cartData.find(
                (cartItem) => cartItem.id === product.id
             );
        }
        if(existingCartItem == undefined){
            setCartData([...cartData,product]);
            setCartTotal(prev=>prev + product.price);
            // let test = JSON.parse(localStorage.getItem("localCartData"))
            // localStorage.setItem("localCartData",JSON.stringify([...test,product]))
        }
        // console.log(existingCartItem)

    }


    const value = {isCartOpen, setIsCartOpen, shopData, setShopData,
        cartData, setOnCartData ,cartTotal} 

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}

export default  ShopProvider;
