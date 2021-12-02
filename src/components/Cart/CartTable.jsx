import React from "react";
import { Button, Table } from "react-bootstrap";
import "../Cart/CartTable.css"

const CartTable = ({ cartList, clearItem, totalPxQ, pxq }) => {
  return (
    <Table striped bordered hover className="col-md-4 col-lg-12">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Total unitario</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((item) => (
          <tr key={item.item.id}>
            <td>{item.cantidad}</td>
            <td>{`${item.item.category} ${item.item.nombre}`}</td>
            <td>${item.item.precio}</td>
            <td>${pxq(item.cantidad, item.item.precio)}</td>
            <td className="text-center">
              <Button variant="danger" onClick={() => clearItem(item.item.id)}>
                {" "}
                X{" "}
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">TOTAL</td>
          <td colSpan="2">${totalPxQ()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTable;
