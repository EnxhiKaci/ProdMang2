import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
  .get("http://localhost:8000/api/products")
  .then((res) => {
    console.log(res.data); // This will log the response data
  })
  .catch((err) => {
    console.log(err);
  });

  }, [products]);

  return (
    <div>
      <h2>All Products</h2>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
          <Link key={index} to={`/products/${product._id}`}>
            {product.title}
          </Link>
        ))
      ) : (
        <p>No products available.</p>
      )}

      
    
    </div>
  );
};

export default ProductsList;


