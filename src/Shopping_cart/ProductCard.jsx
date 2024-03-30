import { useDispatch } from "react-redux";
import "./ProductCard.css";

function ProductCard(props) {
  const dispatch = useDispatch();

  const addToCart = () => {
    const action = { type: "ADD", payload: props.product };
    dispatch(action);
  };

  return (
    <div className="ProductCard">
      <h3>{props.product.title}</h3>
      <p>
        {props.product.description.slice(0, 65)}{" "}
        {props.product.description.length >
        props.product.description.slice(0, 65).length ? (
          <a href="#">More...</a>
        ) : null}
      </p>
      <h4>{props.product.price}$</h4>
      <div
        className="productImage"
        style={{
          backgroundImage: `url(${props.product.thumbnail})`,
          width: "100%",
          height: "150px",
        }}
      ></div>
      {/* <img
        style={{ width: "150px", height: "100px" }}
        src={props.product.thumbnail}
        alt=""
      /> */}
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
