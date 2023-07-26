import "./index.css";
import ProductList from "./features/product/components/ProductList";
import Navbar from "./features/product/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
