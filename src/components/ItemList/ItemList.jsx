import Item from "../Item/Item";

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap w-full max-w-screen-xl gap-4 mx-auto itemListContaine">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;
