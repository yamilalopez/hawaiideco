import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../services/getFirebase";
import { useParams } from "react-router";

const ItemDetailContainer = ({ addCart }) => {
  const [itemFind, setitemFind] = useState(false);
  const [item, setItem] = useState({});

  let { id } = useParams();

  const db = getFirestore();

  const getItem = async () => {
    try {
      const res = await db.collection("Items").doc(id).get();
      setItem({ id: res.id, ...res.data() });
    } catch (error) {
      console.log(error);
    }
    setitemFind(true);
  };

  useEffect(() => {
    setitemFind(false);
    getItem();
    // eslint-disable-next-line
  }, [id]);

  return (
    <section>
      {itemFind ? (
        <ItemDetail item={item} addCart={addCart} />
      ) : (
        <p>Obteniendo producto...</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;