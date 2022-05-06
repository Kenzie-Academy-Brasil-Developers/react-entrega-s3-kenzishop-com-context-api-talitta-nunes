import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const addSum = cart.reduce((acc, item) => {
      return acc + Number(item.price);
    }, 0);
    setValor(addSum);
  }, [cart]);

  const addCart = (cartItem) => {
     toast.success(`${cartItem.name} adicionado!`);
    setCart([...cart, cartItem]);
    
  };
  const delCart = (cartItem) => {
    const newCart = cart.filter((item) => item.name !== cartItem.name);
    setCart([...newCart]);
  };
  return (
    <CartContext.Provider value={{ cart, addCart, delCart, valor }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
