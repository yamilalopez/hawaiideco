import { useState, createContext, useContext } from "react";
import React from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item) => {
    setCartList([...cartList, item]);
  };

  const [qBuy, setqBuy] = useState(0);

  const addCart = (qty) => {
    setqBuy(qBuy + qty);
  };

  // para limpiar carrito
  const clearCart = () => {
    setCartList([]);
    setqBuy(0);
  };

  const clearItem = (id) => {
    let item = cartList.find((item) => item.item.id === id);
    let index = cartList.indexOf(item);
    cartList.splice(index, 1);
    setqBuy(qBuy - item.cantidad);
    setCartList([...cartList]);
  };

  const totalPxQ = () => {
    return cartList.reduce(
      (total, item) => total + item.cantidad * item.item.precio,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        clearCart,
        addCart,
        qBuy,
        clearItem,
        totalPxQ,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;