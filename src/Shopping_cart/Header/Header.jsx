import { useSelector } from "react-redux";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const selectedProducts = useSelector((store) => store);

  return (
    <div className="Header">
      <h1 className="heading">Shopping List</h1>
      <div className="notfications">
        <FaShoppingCart style={{ fontSize: "26px" }} />
        {selectedProducts.length > 0 ? (
          <div className="items">
            <p>{selectedProducts.length}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
