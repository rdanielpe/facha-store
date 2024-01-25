import './App.css'
import NavBar from './components/NavBar/NavBar'
import Portada from './components/Portada/Portada'
import Marcas from './components/Marcas/Marcas'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>

      <NavBar/>

      <Portada/>

      <Marcas/>

      <ItemListContainer greeting={"LO MAS VENDIDO"}/>

    </>
  )
}

export default App

