import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./components/Home/Home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
// import Cart from "./components/Cart/Cart"
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/all" element={<ItemListContainer />} />
          <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />
          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
