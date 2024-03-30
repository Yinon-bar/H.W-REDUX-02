import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import ProductCardCart from "./ProductCardCart";

function Cart() {
  const products = useSelector((store) => {
    return store;
  });
  const totalPrices = [...products];

  let sum = 0;
  totalPrices.map((product) => {
    sum += product.price;
    // setSubTotal(product.price);
  });

  return (
    <div className="Cart">
      <h2>Cart</h2>
      {products.map((product) => (
        <ProductCardCart key={product.id} product={product} />
      ))}
      {sum > 0 ? (
        <>
          <hr className="hr" />
          <div className="row">
            <h3>Sub Total: </h3>
            <h3>{sum}$</h3>
          </div>
          <div className="row">
            <h3>Vat: </h3>
            <h3>{Math.round(sum * 0.18)}$</h3>
          </div>
          <div className="row">
            <h3>Total: </h3>
            <h3>{Math.round(sum * 1.18)}$</h3>
          </div>{" "}
        </>
      ) : null}
    </div>
  );
}

export default Cart;
