import "./ProductList.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function ProductsList() {
  const [products, setProducts] = useState([]);
  // const products = useSelector((store) => store);

  useEffect(() => {
    const fetchAPI = async () => {
      const resp = await axios.get("https://dummyjson.com/products");
      setProducts(resp.data.products);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <div className="ProductList">
        <h2>Products</h2>
        <div className="Products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
