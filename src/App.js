import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from"./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemProductContainer from "./components/ItemProductContainer/ItemProductContainer";
import CartProvider from "./context/CartProvider";
import CartView from "./components/CartView/CartView";
function App() {
 
  return (
    <CartProvider>
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= '/' element= {<ItemListContainer greeting = "Lista de Productos" />}></Route>
        <Route path= '/productos/:id' element= {<ItemProductContainer greeting = "Categorias" />}></Route>
        <Route path= '/detalles/:id' element= {<ItemDetailContainer/>} ></Route>
        <Route path= '/cart' element= {<CartView/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
