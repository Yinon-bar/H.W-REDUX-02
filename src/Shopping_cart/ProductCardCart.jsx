import { useDispatch } from "react-redux";
import "./ProductCarsCart.css";
import { MdDelete } from "react-icons/md";

function ProductCardCart(props) {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    const action = { type: "REMOVE", payload: id };
    dispatch(action);
  };

  return (
    <div className="ProductCardCart">
      <div
        className="productImg"
        style={{ backgroundImage: `url(${props.product.thumbnail})` }}
      ></div>
      <h3>{props.product.title}</h3>
      <h3>{props.product.price}$</h3>
      <button onClick={(e) => removeItem(props.product.id)}>
        <MdDelete style={{ fontSize: "20px", color: "#c44133" }} />
      </button>
    </div>
  );
}

export default ProductCardCart;
