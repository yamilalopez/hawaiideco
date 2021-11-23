import React, { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
//import "../Cart/Cart.css";
import firebase from "firebase";
import Swal from "sweetalert2";
import { getFirestore } from "../../services/getFirebase";
import CartForm from "../Cart/CartForm";
import CartTable from "./CartTable";

const Cart = () => {
  const { cartList, clearCart, clearItem, totalPxQ } = useCartContext();
  const pxq = (a, b) => {
    return a * b;
  };

  const [dataForm, setDataForm] = useState({});

  const finishBuy = (dataForm) => {
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = {
      name: dataForm.fullName,
      email: dataForm.email,
      phone: dataForm.phone,
      payment: dataForm.payment,
    };
    order.total = totalPxQ();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const item = cartItem.item.nombre;
      const precio = pxq(cartItem.item.precio, cartItem.cantidad);
      const cantidad = cartItem.cantidad;
      return { id, item, precio, cantidad };
    });

    const dbOrder = getFirestore();
    const orderReady = dbOrder.collection("orders");
    orderReady
      .add(order)
      .then((IdDocumento) => {
        Swal.fire({
          icon: "info",
          title: `Su orden ${IdDocumento.id} se proceso correctamente, gracias por habernos elegido`,
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        clearCart();
      });

    const updateItems = dbOrder.collection("Items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((i) => i.item.id)
    );

    const batch = dbOrder.batch();
    updateItems.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((it) => it.item.id === docSnapshot.id).cantidad,
        });
      });
      batch
        .commit()
        .then((resp) => {
          console.log("modificado");
        })
        .catch((er) => {
          console.log(er);
        });
    });
  };

  let cartMessage = true;
  if (cartList.length > 0) {
    cartMessage = false;
  }

  return (
    <section>
      <div>
        <h1 className="cart__title">Productos Adquiridos</h1>
        {cartMessage ? (
          <div className="btnCart btnCart__title">
            <h2>Aun no has agregado ningun producto</h2>
            <Link to="/">
              <button className="btn btn-dark botonAgregar m-1 ">
                Elegir producto
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="cart">
              <div className="cartTable">
                <CartTable
                  cartList={cartList}
                  clearItem={clearItem}
                  totalPxQ={totalPxQ}
                  pxq={pxq}
                />
              </div>
              <div className="cartForm">
                <CartForm
                  finishBuy={finishBuy}
                  clearCart={clearCart}
                  setDataForm={setDataForm}
                  dataForm={dataForm}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart