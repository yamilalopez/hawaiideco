import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import "./CartWidget.css";

const CartWidget = () => {
  const { qBuy } = useCartContext();

  return (
    <Link to="/cart">
      <div>
        <TiShoppingCart size={40} color="white" className="carrito" />
        <div className="qty-display">{qBuy}</div>
      </div>
    </Link>
  );
};

export default CartWidget