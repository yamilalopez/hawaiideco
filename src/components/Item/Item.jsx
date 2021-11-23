//import "../Item/Item.css";
import { Link } from "react-router-dom";
import React from "react";

const Item = ({ nombre, precio, img, stock, id }) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-6 mt-4">
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title mt-3"> {nombre}</h5>
              <Link to={`/detail/${id}`}>
                <button className="btn col-xs-6 btn-dark hover m-3 mt-5 ">
                  Ver detalles{" "}
                </button>
              </Link>
              <p className="card-text m-2">Precio: Usd {precio}</p>
              <p>En stock: {stock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;