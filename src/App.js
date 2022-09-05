import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from"./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
 
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Lista de Productos" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
