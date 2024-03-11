import { useState } from "react";
import { Icon } from "@iconify/react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const resHandler = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  const addHandler = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const handleClick = (count) => {
    onAdd(count);
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-row">
        <button
          className="text-white bg-black rounded-md btn "
          onClick={resHandler}
        >
          <Icon icon="heroicons:minus" />
        </button>
        <label className="flex items-center justify-center px-10 text-xl text-black ">
          {count}
        </label>
        <button
          className="text-white bg-black rounded-md btn"
          onClick={addHandler}
        >
          <Icon icon="heroicons:plus" />
        </button>
      </div>
      <div>
        <button
          className="text-white bg-blue-500 rounded-md btn btn-block "
          onClick={() => handleClick(count)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
