import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./productos.json");
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.log("Error fetch" + error);
      }
    };

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>

      {productos.length == 0 ? (
        <h1>No Productos</h1>
      ) : (
        <ItemList productos={productos}/>
      )}
    </div>
  );
};
export default ItemListContainer;
