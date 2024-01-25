import "./Portada.css"

const Portada = () => {
  return (

    <div className="portada bg-portada bg-cover min-h-[calc(102vh-108px)] flex items-center justify-center">
      <img className="ml-[900px] mt-36" src="/img/logo.png" alt="" />
      <h2 className="text-white text-4xl font-extralight font-arial absolute bottom-0 mb-[120px]">¡No te quedes sin la fach@ este verano !</h2>
    </div>

  )
}
export default Portada
