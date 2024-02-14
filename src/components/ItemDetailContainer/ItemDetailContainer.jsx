import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const { id } = useParams()
  return (
    <div>Detalle de producto: {id}</div>
  )
}
export default ItemDetailContainer
