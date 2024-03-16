import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const Checkout = () => {

	//context del carrito
  const { cart, deleteCart,totalCart } = useContext(CartContext);

	// Use states que permiten obtener el id de la compra, mostrar un modal final y obtener los datos del cliente
	const [idCompra, setIdCompra] = useState("")
	const [ showModal, setShowModal ] = useState()
	const [ buyer, setBuyer ] = useState({
		name: "",
		surname: "",
		telephone: "",
		email: "",
	})

	//Expresiones regulares para email y teléfono
	const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
	const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im

  // Obtener información acerca de la fecha en que se realizó la compra
	const orderDate = new Date().toLocaleDateString()

	//Obtener datos del cliente
	const handleSubmitChange = (e) =>{
		setBuyer({ ...buyer, [e.target.name]: e.target.value })
	}

	//Generacion de la orden
  const saveOrder = async () => {
		const order = {
			buyer,
			items: cart,
			price: totalCart(),
			date: orderDate
		}
		const db = getFirestore()
		const addOrder = async (order) => {
			const docSnap = await addDoc(collection(db, "orders"), order)
			return docSnap.id
		}

		addOrder(order).then(data => {
			setIdCompra(data)
		})
		// const cartFiltered = cart.map(({ id, title }) => ({ id, title }))
		// const orderToSave = {
		// 	buyer: buyer,
		// 	items: cartFiltered,
		// 	total: cartTotal()
		// }
		// console.log(orderToSave);
	}



  return (
		<div className="mt-32">
			<div className="flex items-center justify-center mx-auto xl:max-w-7xl xl:mx-auto">
				<div className="flex flex-col items-center justify-center w-full">
					{/* Título */}
					<h1 className="self-start mt-6 mb-6 text-lg font-medium leading-tight tracking-wider text-gray-800 uppercase">
						Checkout
					</h1>
					{/* Información de la compra */}
					<div className="flex flex-col items-start justify-start w-full lg:flex-row">

						{/* Resúmen */}
						<div className="flex flex-col self-start w-full mr-6 md:w-1/2">
							<h2 className="text-xs font-medium leading-loose tracking-wider text-gray-700 uppercase">Resúmen</h2>
							<div className="flex flex-col p-4 mt-6 border border-gray-200">
								<div className="flex flex-row justify-between text-sm font-light leading-normal tracking-wide text-gray-600">
									<p>Cantidad de items:</p>
									<p>{cart.reduce((acc, item) => acc + item.cantidad, 0)}</p>
								</div>
								<div className="flex flex-row justify-between text-sm font-light leading-normal tracking-wide text-gray-600">
									<p>Gastos de envío:</p>
									<p>¡Envío gratis!</p>
								</div>
								<div className="flex flex-row justify-between mt-10 text-xs font-semibold leading-loose tracking-wider text-gray-700 uppercase">
									<p>Total:</p>
									<p>${totalCart()}</p>
								</div>
							</div>
							<Link to='/cart' className="text-white bg-blue-500 rounded-md btn">

								Volver al carrito
							</Link>

						</div>
						{/* <button className="ml-2 bg-green-500 btn hover:bg-green-600" onClick={updateOrder}>actualizar datos</button>
				<button className="ml-2 bg-red-600 btn hover:text-black hover:bg-white" onClick={batchUpdate}>Batch</button> */}

						{/* Detalle de facturación */}
						<div className="flex flex-col items-start justify-start w-full mt-6 mb-3 lg:mt-0">

							{/* Formulario */}
							<form className="space-y-6">
								<h2 className="text-xs font-medium leading-loose tracking-wider text-gray-700 uppercase">Detalles de facturación</h2>
								<input
									className="w-full px-2 py-4 text-sm font-light leading-normal tracking-wide text-gray-600 placeholder-gray-600 border-b border-gray-200 focus:outline-none focus:ring-white focus:border-gray-600"
									id="name"
									type="text"
									name="name"
									required
									onChange={handleSubmitChange}
									placeholder="Nombre"
								/>
								<input
									className="w-full px-2 py-4 text-sm font-light leading-normal tracking-wide text-gray-600 placeholder-gray-600 border-b border-gray-200 focus:outline-none focus:ring-white focus:border-gray-600"
									id="surname"
									type="text"
									name="surname"
									required
									onChange={handleSubmitChange}
									placeholder="Apellido"
								/>
								<input
									className="w-full px-2 py-4 text-sm font-light leading-normal tracking-wide text-gray-600 placeholder-gray-600 border-b border-gray-200 focus:outline-none focus:ring-white focus:border-gray-600"
									id="telephone"
									type="tel"
									name="telephone"
									required
									onChange={handleSubmitChange}
									placeholder="Teléfono (insertar como mínimo 7 dígitos)"
								/>
								<input
									className="w-full px-2 py-4 text-sm font-light leading-normal tracking-wide text-gray-600 placeholder-gray-600 border-b border-gray-200 focus:outline-none focus:ring-white focus:border-gray-600"
									id="email"
									type="email"
									name="email"
									required
									onChange={handleSubmitChange}
									placeholder="E-mail"
								/>
								<input
									className="w-full px-2 py-4 text-sm font-light leading-normal tracking-wide text-gray-600 placeholder-gray-600 border-b border-gray-200 focus:outline-none focus:ring-white focus:border-gray-600"
									id="emailConfirm"
									type="email"
									name="emailConfirm"
									required
									onChange={handleSubmitChange}
									placeholder="Confirmar e-mail"
								/>
							</form>
							{/* Si se completan todos los inputs correctamente, se habilita el botón para proceder con el pago */}
							{buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
								? (
									// Botón habilitado
									<input
										onClick={() => { saveOrder(); setShowModal(true) }}
										className="w-full py-3 mt-6 font-medium leading-normal tracking-wider text-center text-white uppercase bg-blue-500 cursor-pointer select-none text-xxs focus:outline-none focus:ring-transparent"
										type="submit"
										value="Proceder al pago"
									/>
								) : (
									// Botón deshabilitado
									<input
										className="w-full py-3 mt-6 font-medium leading-normal tracking-wider text-center text-white uppercase bg-blue-300 select-none text-xxs focus:outline-none focus:ring-transparent"
										type="submit"
										value="Proceder al pago"
										disabled
									/>
								)
							}
						</div>
					</div>
				</div>
			</div>
			{/* Contenedor modal final */}
			<div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
				<div className="container items-center justify-center px-4 py-20 mx-auto md:px-10 place-self-center">
					<div className="flex flex-col items-center justify-center px-3 py-12 bg-white md:px-4">
						<h2 className="text-lg font-medium leading-tight tracking-wider text-center text-gray-800 uppercase md:w-9/12 lg:w-7/12">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
						<h2 className="text-center md:w-9/12 lg:w-7/12 ">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
						<p className="mt-6 text-sm font-light leading-normal tracking-wide text-center text-gray-600 md:w-9/12 lg:w-7/12" >Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}.¡Gracias por visitar D&A Fach@! Esperamos que hayas encontrado lo que necesitabas. ¡Nos vemos pronto!</p>
						<Link to="/" className="flex justify-center mt-6">
							<button onClick={deleteCart} className="w-40 py-3 font-medium leading-normal tracking-wider text-center text-white uppercase bg-gray-700 cursor-pointer select-none text-xxs focus:outline-none focus:ring-transparent">
								Volver al inicio
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
  )
}
export default Checkout
