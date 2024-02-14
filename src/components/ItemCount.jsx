import React,{useState} from "react";

const Itemcount = () => {

      const [contador,setContador] = useState(1);

      const decrementar = () => {
        if(contador > 1){
          setContador(contador - 1)
        }
      }

      const incrementar = () => {
        if(contador < 10){
          setContador(contador+1)
        }
      }

      const agregarCarrito = () => {
        alert("AGREGASTE AL CARRITO")
      }
  return (
    <div>

      <h1>Contador</h1>

      <p>Contador: {contador} </p>

      <button className="px-3 py-1 bg-blue-500" onClick={decrementar}>-</button>

      <button className="px-3 py-1 bg-blue-500" onClick={agregarCarrito}>Agregar al Carrito</button>

      <button className="px-3 py-1 bg-blue-500" onClick={incrementar}>+</button>

    </div>
  )
}
export default Itemcount
