import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    //generamos el filtrado de los productos
    const misProductos = categoryId
      ? query(collection(db, "productos"), where("marca", "==", categoryId))
      : collection(db, "productos");

    //generamos los documentos solicitados
    getDocs(misProductos).then((res) => {
      const nuevosProductos = res.docs.map((doc) => {
        const data = doc.data();
        return { id: doc.id, ...data };
      });
      setProductos(nuevosProductos);
    });
  }, [categoryId]);

  return (
    <div className="mt-32">
      <h1>{greeting}</h1>

      {productos.length == 0 ? (
        <h1>No Productos</h1>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
export default ItemListContainer;
