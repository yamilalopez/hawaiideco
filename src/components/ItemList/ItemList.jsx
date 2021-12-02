import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { getFirestore } from "../../services/getFirebase";
import { useParams } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    db.collection("Items")
      .get() //toda la coleccion
      .then((resp) =>
        setProducts(resp.docs.map((it) => ({ id: it.id, ...it.data() })))
      ); //capturar la promesa
  }, []);

  let { categorias } = useParams();

  const showItems = async () => {
    const db = getFirestore();
    if (categorias) {
      try {
        const res = await db
          .collection("Items")
          .where("category", "==", categorias)
          .get();
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await db
          .collection("Items")
          .orderBy("category", "desc")
          .get();
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      } catch (error) {
        console.log(error);
      }
    }
    setTimeout(2000);
  };

  useEffect(() => {
    showItems();
    // eslint-disable-next-line
  }, [categorias]);

  return (
    <>
      {products.length ? (
        <>
          <div className="container">
            <div className="row mb-5">
              {products.map((product) => (
                <div key={product.id} className="col-sm-12 col-md-6 col-lg-4">
                  <Item
                    id={product.id}
                    nombre={product.nombre}
                    stock={product.stock}
                    precio={product.precio}
                    category={product.category}
                    img={product.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <ProgressBar>
          <ProgressBar
            striped
            variant="success"
            animated="boolean"
            label="Visualizing products 40%"
            now={35}
            key={1}
          />
        </ProgressBar>
      )}
    </>
  );
};

export default ItemList;
