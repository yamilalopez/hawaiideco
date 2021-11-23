import React from "react";
import { useState } from "react";
//import "../Item/Item.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div>
      <>
        <div className="">
          <button
            className="btn col-xs-6 btn-dark"
            onClick={() => addProduct(-1)}
            disabled={qty === initial ? true : null}
          >
            {" "}
            -{" "}
          </button>
          <span>Cantidad : {qty} </span>
          <button
            className="btn col-xs-6 btn-dark"
            onClick={() => addProduct(+1)}
            disabled={qty === stock ? true : null}
          >
            {" "}
            +{" "}
          </button>
        </div>

        <div>
          <button
            className="btn btn-dark botonAgregar"
            onClick={() => onAdd(qty)}
            disabled={stock === 0 ? true : null}
          >
            Agregar al Carrito
          </button>
        </div>

        <div className="stock pb-6">
          <p>Stock disponible: {stock}</p>
        </div>
      </>
    </div>
  );
};

export default ItemCount;