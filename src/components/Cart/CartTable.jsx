import React from "react";
import { Button, Table } from "react-bootstrap";

const CartTable = ({ cartList, clearItem, totalPxQ, pxq }) => {
  return (
    <Table striped bordered hover variant="dark" className="col-md-4 col-lg-12">
      <thead>
        <tr>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>TotalxU</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartList.map((item) => (
          <tr key={item.item.id}>
            <td>{item.cantidad}</td>
            <td>{`${item.item.category} ${item.item.nombre}`}</td>
            <td>{item.item.precio}</td>
            <td>{pxq(item.cantidad, item.item.precio)}</td>
            <td className="text-center">
              <Button variant="danger" onClick={() => clearItem(item.item.id)}>
                {" "}
                X{" "}
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">TOTAL USD</td>
          <td colSpan="2">USD {totalPxQ()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartTable;