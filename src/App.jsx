import "./App.css";
import { useDispatch } from "react-redux";
import ProductsList from "./Shopping_cart/ProductsList";
import Cart from "./Shopping_cart/Cart";
import Header from "./Shopping_cart/Header/Header";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ProductsList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
