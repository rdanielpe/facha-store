import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config";
import { doc,getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [producto,setProducto] = useState([]);

  const {id} = useParams()

    useEffect(()=>{

      //GENERAMOS EL LLAMADO AL DOCUMENTO DETERMINADO
      const nuevoDoc = doc(db,"productos",id)

      //HACEMOS EL LLAMADO AL DOCUMENTO Y LO RENDERIZAMOS EN PANTALLA
      getDoc(nuevoDoc)
      .then(res => {
        if (res.exists()) {
          setProducto({id: res.id, ...res.data() })
        }
      })
      .catch(error => console.log(error))
  },[])

  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}
export default ItemDetailContainer
