import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { cartList, addItem, addCart } = useCartContext();

  const onAdd = (qty) => {
    if (cartList.length === 0) {
      addItem({ item: item, cantidad: qty });
      addCart(qty);
      alert(`Agregaste al carrito ${qty} moto/s ${item.nombre}`);
      setShow(true);
      setHide(false);
    } else {
      let idDouble = cartList.find((producto) => producto.item.id === item.id);
      console.log(idDouble);
      console.log(cartList[0].item.id);

      if (idDouble) {
        alert(`Ud agrego ${qty} unidades al carrito`);
        addCart(qty);
        idDouble.cantidad = idDouble.cantidad + qty;
        setShow(true);
        setHide(false);
      } else {
        alert(`Ud agrego ${qty} unidades al carrito`);
        addCart(qty);
        setShow(true);
        setHide(false);
        addItem({ item: item, cantidad: qty });
      }
    }
  };

  const [show, setShow] = useState(false);

  const [hide, setHide] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="mt-5 mb-4 col-sm-3 col-md-4"></div>
        <div className="card mt-5 mb-5 col-sm-6 col-md-4">
          <img src={item.img} className="card-img-top" alt="..." />
          <h2>{item.nombre}</h2>
          <ul className="info-grid">
            <li>
              Modelo<br></br> {item.category}
            </li>
            <li>Precio Usd{item.precio}</li>
          </ul>
          <p className="descripcion">{item.descripcion}</p>
          {hide ? (
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          ) : null}
          {show ? (
            <Link to={"/cart"}>
              <button className="btn btn-dark botonAgregar btn__detail mb-1">
                Finalizar Compra
              </button>
            </Link>
          ) : null}
          {show ? (
            <Link to={"/"}>
              <button className="btn btn-dark botonAgregar btn__detail mb-5">
                Seguir Comprando
              </button>
            </Link>
          ) : null}
        </div>
        <div className=" mt-5 mb-5 col-sm-3 col-md-4"></div>
      </div>
    </div>
  );
};

export default ItemDetail;